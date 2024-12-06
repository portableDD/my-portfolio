import AllContext from "../features/AllContext";
import { useContext } from "react";
import IconCircle from "../ui/IconCircle";
import { FaRegCopyright } from "react-icons/fa6";

const HomeFooter = () => {
  const { NavIcon } = useContext(AllContext);
  const year = new Date().getFullYear();

  return (
    <div className="bg-blackGradient rounded-lg border-t border-peach">
      <div className="py-1.5 flex flex-col gap-3 md:flex-row justify-center items-center">
        <p className="font-semibold">
        <FaRegCopyright className="inline mr-1 text-peach" />
        {year} ED design. All Right Reserved
        </p>
        <div className="hidden md:block border-r border-[#CDCFD6] py-5"></div>
        <div className="flex gap-3 text-peach">
          {NavIcon.map((icon, index) => (
            <IconCircle key={index}>
              <a href={icon.path} target="blank">
                <icon.icon />
              </a>
            </IconCircle>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
