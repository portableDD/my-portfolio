import { Link } from "react-router-dom";
import AllProjects from "../../ui/AllProjects";
import Button from "../../ui/Button";
import { FaArrowRight } from "react-icons/fa";

const ProjectSection = () => {
  return (
    <div className="md:px-6 my-8">
      <h2 className="text-3xl">WHAT I HAVE WORKED ON!</h2>
      <AllProjects />
      <div className="flex justify-center items-center my-10">
        <Button>
          <Link to={"/project"} className="flex gap-3 items-center">
            See All Project <FaArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectSection;
