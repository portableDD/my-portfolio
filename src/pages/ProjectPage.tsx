import Introduction from "../components/ProjectPage/Introduction"
import AllProjects from "../ui/AllProjects"

const ProjectPage = () => {
  return (
    <div className="md:px-12 flex flex-col gap-4">
      <Introduction />
      <AllProjects/> 
    </div>
  )
}

export default ProjectPage