import { IconType } from "react-icons";
import ContactCircle from "./ContactIcon";

interface IconProps {
  label: string;
  Icon: IconType;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  path: string;
}

const CircularIcon = ({ label, Icon, position, path }: IconProps) => {
  return (
    <div
      className="absolute "
      style={position} // Dynamically set position
      title={label} // Tooltip for accessibility
    >
      <ContactCircle>
        <a href={path} target="blank">
          <Icon />
        </a>
      </ContactCircle>
    </div>
  );
};

export default CircularIcon;
