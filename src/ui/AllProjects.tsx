import { useContext } from "react";
import AllContext from "../features/AllContext";
import ProjectUi from "./ProjectUi";
import { useLocation } from "react-router-dom";

const AllProjects = () => {
  const { ProjectDetails } = useContext(AllContext);
  const HomeProject = ProjectDetails.slice(0, 4);

  const location = useLocation();
  const checkLocation = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className="w-[85%] md:w-full lg:w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8 my-5">
      {checkLocation("/") ? (
        <>
          {HomeProject.map((project) => (
            <ProjectUi
              key={project.id}
              icons={project.icons}
              imageSrc={project.imageSrc}
              pathicons={project.pathicons}
              projectName={project.projectName}
              shape={project.shape}
            />
          ))}
        </>
      ) : (
        <>
          {ProjectDetails.map((project) => (
            <ProjectUi
              key={project.id}
              icons={project.icons}
              imageSrc={project.imageSrc}
              pathicons={project.pathicons}
              projectName={project.projectName}
              shape={project.shape}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default AllProjects;
