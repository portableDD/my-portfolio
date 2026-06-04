'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { X, Download, Minus, Plus, Menu, ChevronLeft, ChevronRight } from 'lucide-react'
import { personalInfo } from '@/lib/data'

// Use CDN worker — avoids any Next.js webpack config
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const ZOOM_STEPS = [0.5, 0.6, 0.75, 1.0, 1.25, 1.5, 2.0]
const DEFAULT_ZOOM = 3 // index → 1.0

interface CVModalProps {
  open: boolean
  onClose: () => void
}

export default function CVModal({ open, onClose }: CVModalProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [zoomIdx, setZoomIdx] = useState(DEFAULT_ZOOM)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mainWidth, setMainWidth] = useState(700)

  const mainRef = useRef<HTMLDivElement>(null)
  const pageRefs = useRef<(HTMLDivElement | null)[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  const scale = ZOOM_STEPS[zoomIdx]

  // Measure main panel width for responsive page sizing
  useEffect(() => {
    if (!open) return
    const measure = () => {
      if (mainRef.current) setMainWidth(mainRef.current.clientWidth - 48)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (mainRef.current) ro.observe(mainRef.current)
    return () => ro.disconnect()
  }, [open, sidebarOpen])

  // Track which page is in view
  useEffect(() => {
    if (!numPages) return
    observerRef.current?.disconnect()
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          const idx = pageRefs.current.indexOf(visible[0].target as HTMLDivElement)
          if (idx !== -1) setCurrentPage(idx + 1)
        }
      },
      { root: mainRef.current, threshold: 0.3 }
    )
    pageRefs.current.forEach((el) => { if (el) observerRef.current!.observe(el) })
    return () => observerRef.current?.disconnect()
  }, [numPages, open])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const onDocumentLoad = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setCurrentPage(1)
  }, [])

  const scrollToPage = (n: number) => {
    pageRefs.current[n - 1]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const zoomIn  = () => setZoomIdx((i) => Math.min(i + 1, ZOOM_STEPS.length - 1))
  const zoomOut = () => setZoomIdx((i) => Math.max(i - 1, 0))

  const prevPage = () => { if (currentPage > 1) scrollToPage(currentPage - 1) }
  const nextPage = () => { if (numPages && currentPage < numPages) scrollToPage(currentPage + 1) }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Viewer panel */}
          <motion.div
            className="fixed inset-y-4 inset-x-4 sm:inset-y-6 sm:inset-x-[8%] lg:inset-x-[18%] z-50 flex flex-col rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#1e1e1e] shadow-2xl"
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Toolbar ── */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#2d2d2d] border-b border-[#3a3a3a] flex-shrink-0 select-none">
              {/* Left — hamburger + title */}
              <button
                onClick={() => setSidebarOpen((v) => !v)}
                className="p-1.5 rounded hover:bg-[#3a3a3a] text-[#aaa] hover:text-white transition-colors"
                aria-label="Toggle sidebar"
              >
                <Menu className="h-4 w-4" />
              </button>

              <span className="text-sm text-[#ccc] font-medium truncate max-w-[160px] sm:max-w-xs">
                Emmanuel Dorcas — Resume
              </span>

              {/* Page navigation */}
              <div className="flex items-center gap-1 ml-3">
                <button
                  onClick={prevPage}
                  disabled={currentPage <= 1}
                  className="p-1 rounded hover:bg-[#3a3a3a] text-[#aaa] hover:text-white disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-xs text-[#999] tabular-nums px-1">
                  {currentPage} / {numPages ?? '—'}
                </span>
                <button
                  onClick={nextPage}
                  disabled={!numPages || currentPage >= numPages}
                  className="p-1 rounded hover:bg-[#3a3a3a] text-[#aaa] hover:text-white disabled:opacity-30 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Zoom */}
              <div className="flex items-center gap-1 ml-2">
                <button
                  onClick={zoomOut}
                  disabled={zoomIdx === 0}
                  className="p-1 rounded hover:bg-[#3a3a3a] text-[#aaa] hover:text-white disabled:opacity-30 transition-colors"
                  aria-label="Zoom out"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="text-xs text-[#999] tabular-nums w-10 text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  disabled={zoomIdx === ZOOM_STEPS.length - 1}
                  className="p-1 rounded hover:bg-[#3a3a3a] text-[#aaa] hover:text-white disabled:opacity-30 transition-colors"
                  aria-label="Zoom in"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Right actions */}
              <div className="ml-auto flex items-center gap-1">
                <a
                  href={personalInfo.cvUrl}
                  download
                  className="p-1.5 rounded hover:bg-[#3a3a3a] text-[#aaa] hover:text-white transition-colors"
                  aria-label="Download CV"
                >
                  <Download className="h-4 w-4" />
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded hover:bg-[#3a3a3a] text-[#aaa] hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* ── Body: sidebar + main ── */}
            <div className="flex flex-1 min-h-0">

              {/* Sidebar — page thumbnails */}
              <AnimatePresence initial={false}>
                {sidebarOpen && (
                  <motion.aside
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 100, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#252525] border-r border-[#333] overflow-y-auto overflow-x-hidden flex-shrink-0"
                  >
                    <div className="py-3 flex flex-col items-center gap-3">
                      {numPages && Array.from({ length: numPages }, (_, i) => i + 1).map((n) => (
                        <button
                          key={n}
                          onClick={() => scrollToPage(n)}
                          className="flex flex-col items-center gap-1 group"
                        >
                          <div className={`
                            rounded overflow-hidden border-2 transition-colors duration-150
                            ${currentPage === n ? 'border-[#FA7055]' : 'border-transparent group-hover:border-[#555]'}
                          `}>
                            <Document file={personalInfo.cvUrl}>
                              <Page
                                pageNumber={n}
                                width={72}
                                renderAnnotationLayer={false}
                                renderTextLayer={false}
                              />
                            </Document>
                          </div>
                          <span className={`text-[10px] tabular-nums ${currentPage === n ? 'text-[#FA7055]' : 'text-[#666]'}`}>
                            {n}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.aside>
                )}
              </AnimatePresence>

              {/* Main PDF content */}
              <div
                ref={mainRef}
                className="flex-1 overflow-auto bg-[#404040]"
              >
                <Document
                  file={personalInfo.cvUrl}
                  onLoadSuccess={onDocumentLoad}
                  loading={
                    <div className="flex items-center justify-center h-full min-h-[400px]">
                      <div className="flex flex-col items-center gap-3">
                        <div className="h-6 w-6 rounded-full border-2 border-[#FA7055] border-t-transparent animate-spin" />
                        <span className="text-xs text-[#666]">Loading CV…</span>
                      </div>
                    </div>
                  }
                  error={
                    <div className="flex items-center justify-center h-full min-h-[400px] text-[#666] text-sm">
                      Could not load PDF.
                    </div>
                  }
                >
                  {numPages && Array.from({ length: numPages }, (_, i) => i + 1).map((n) => (
                    <div
                      key={n}
                      ref={(el) => { pageRefs.current[n - 1] = el }}
                      className="flex justify-center py-4"
                    >
                      <Page
                        pageNumber={n}
                        scale={scale}
                        width={Math.min(mainWidth, 900)}
                        className="shadow-2xl"
                        renderAnnotationLayer
                        renderTextLayer
                      />
                    </div>
                  ))}
                </Document>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
