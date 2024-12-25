import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AllContext from "../../features/AllContext";

const SingleProjectDetail = () => {
  const { ProjectDetails } = useContext(AllContext);
  const { id } = useParams();
  const ID = Number(id);
  return (
    <div className="my-5">
      {ProjectDetails.filter((project) => project.id === ID).map((project) => (
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start gap-5">
          {/* image */}
          <div
            className={`self-start w-80 h-80 overflow-hidden ${
              project.shape ? "rounded-full" : "rounded-xl"
            }`}
          >
            <img
              src={
                typeof project.imageSrc === "string"
                  ? project.imageSrc
                  : project.imageSrc.src
              }
              alt={project.projectName}
              className="w-full h-full object-cover"
            />
          </div>
          {/* details */}
          <div className="flex flex-col gap-5 w-full md:w-[50%]">
            {/* project name and icon */}
            <div className="flex justify-between items-center ">
              <p className="text-3xl">{project.projectName}</p>
              <p className="text-2xl flex gap-3 text-peach">
                {project.pathicons.slice(1, 3).map((icon) => (
                  <Link
                    to={icon.path}
                    key={icon.id}
                    target={icon.target}
                    rel="noopener noreferrer"
                    className=""
                  >
                    <icon.icon />
                  </Link>
                ))}
              </p>
            </div>
            {/* decription */}
            <div dangerouslySetInnerHTML={{ __html: project.desc }} className="flex flex-col gap-2" />
            {/* tags */}
            <div className="flex gap-4 items-center text-3xl text-peach">
              {project.icons.map((Icon, index) => (
                <Icon key={index} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleProjectDetail;
