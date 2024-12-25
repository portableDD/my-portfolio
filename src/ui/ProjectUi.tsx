import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type StaticImageData = {
  src: string;
};

type ProjectProps = {
  imageSrc: string | StaticImageData;
  projectName: string;
  shape: boolean;
  icons: IconType[];
  pathicons: { id: number; icon: IconType; path: string; target: string }[];
};

const ProjectUi = ({
  imageSrc,
  shape,
  icons,
  projectName,
  pathicons,
}: ProjectProps) => {
  return (
    <div
      className={`relative group w-80 h-80 overflow-hidden shadow-lg ${
        shape ? "rounded-full" : "rounded-xl"
      }`}
    >
      {/* Background Image */}
      <img
        src={typeof imageSrc === "string" ? imageSrc : imageSrc.src}
        alt={projectName}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-[#020411] bg-opacity-80 flex flex-col gap-3 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-white text-2xl font-semibold">{projectName}</h3>
        <div className="grid grid-cols-3 gap-2  text-3xl text-peach">
          {pathicons.map((icon) => (
            <Link
              to={icon.path}
              key={icon.id}
              target={icon.target}
              rel="noopener noreferrer"
            >
              <icon.icon />
            </Link>
          ))}
        </div>
        <div className="flex gap-2 justify-center items-center text-3xl text-peach">
          {icons.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectUi;
