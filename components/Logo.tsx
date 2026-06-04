interface LogoProps {
  size?: number
  className?: string
}

/**
 * "D" lettermark for Emmanuel Dorcas.
 * Outer D shape + inner cutout using fill-rule="evenodd".
 * Works cleanly at any size — 16 px favicon to full display.
 */
export default function Logo({ size = 36, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Emmanuel Dorcas logo"
      className={className}
    >
      {/* Background tile */}
      <rect width="40" height="40" rx="9" fill="#111111" />
      <rect width="40" height="40" rx="9" fill="none" stroke="#222222" strokeWidth="1" />

      {/* D lettermark — evenodd creates the inner opening */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FA7055"
        d="
          M 11 8 L 19.5 8 C 33 8 33 32 19.5 32 L 11 32 Z
          M 14.5 12.5 L 19.5 12.5 C 26.5 12.5 26.5 27.5 19.5 27.5 L 14.5 27.5 Z
        "
      />

      {/* Peach accent dot — bottom-right corner */}
      <circle cx="31.5" cy="31.5" r="2.5" fill="#FA7055" opacity="0.55" />
    </svg>
  )
}
