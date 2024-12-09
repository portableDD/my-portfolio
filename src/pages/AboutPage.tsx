import OverviewAbout from "../components/AboutPage/Overview"
import AllSkill from "../ui/AllSkill"
import AllStack from "../ui/AllStack"

const AboutPage = () => {
  return (
    <div className="md:px-12 flex flex-col gap-4">
      <OverviewAbout />
      <AllStack />
      <AllSkill />
    </div>
  )
}

export default AboutPage