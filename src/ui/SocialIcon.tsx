import { useContext } from "react";
import AllContext from "../features/AllContext";
import IconCircle from "./IconCircle";

const SocialIcon = () => {
  const { NavIcon } = useContext(AllContext);
  return (
    <>
      {NavIcon.map((icon, index) => (
        <IconCircle key={index}>
          <a href={icon.path} target="blank">
            <icon.icon />
          </a>
        </IconCircle>
      ))}
    </>
  );
};

export default SocialIcon;
