import ContactSection from "../components/HomePage/ContactSection"
import Hero from "../components/HomePage/Hero"
import Overview from "../components/HomePage/Overview"
import ProjectSection from "../components/HomePage/ProjectSection"
import OpenSources from "../components/OpenSources"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Overview />
      <OpenSources />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default HomePage