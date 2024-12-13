import { useContext } from "react";
import AllContext from "../features/AllContext";
import IconCircle from "./IconCircle";

const SocialIcon = () => {
  const { NavIcon } = useContext(AllContext);
  return (
    <>
      {NavIcon.map((icon, index) => (
        <IconCircle key={index} path={icon.path} >
          <icon.icon />
        </IconCircle>
      ))}
    </>
  );
};

export default SocialIcon;
