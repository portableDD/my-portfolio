import ContactSection from "../components/HomePage/ContactSection"
import Hero from "../components/HomePage/Hero"
import Overview from "../components/HomePage/Overview"
import ProjectSection from "../components/HomePage/ProjectSection"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default HomePage