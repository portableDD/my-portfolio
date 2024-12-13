import { useContext } from "react";
import CircularIcon from "../../ui/CircularIcon";
import AllContext from "../../features/AllContext";

const ContactCircle = () => {
  const { ContactIcons } = useContext(AllContext);
  return (
    <div className="relative flex items-center justify-center w-72 h-72 md:w-80 md:h-80 mx-auto ">
      {/* Central Contact Button */}
      <div className="absolute w-36 h-36 bg-layoutBg border border-peach rounded-full flex items-center justify-center text-white text-2xl font-semibold shadow-contact animate-pulse">
        Contact
      </div>

      {/* Map through icon data */}
      {ContactIcons.map((icon, index) => (
        <CircularIcon
          key={index}
          label={icon.label}
          Icon={icon.icon}
          position={icon.position}
          path={icon.path}
        />
      ))}
    </div>
  );
};

export default ContactCircle;
