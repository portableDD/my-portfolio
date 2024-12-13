import { IconType } from "react-icons";
import ContactCircle from "./ContactIcon";
import { Link } from "react-router-dom";

interface IconProps {
  label: string;
  Icon: IconType;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  path: string;
}

const CircularIcon = ({ label, Icon, position, path }: IconProps) => {
  return (
    <div
      className="absolute"
      style={position} // Dynamically set position
      title={label} // Tooltip for accessibility
    >
      <ContactCircle>
        <Link to={path} target="blank" rel="noopener noreferrer">
          <Icon />
        </Link>
      </ContactCircle>
    </div>
  );
};

export default CircularIcon;
