import { FaArrowRight } from "react-icons/fa";
import Arrow from "../../assets/arrow.svg";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="flex justify-between md:justify-center items-center gap-3 my-8 mx-auto w-[80%]">
      <p className="md:self-end text-2xl w-36 md:w-96 lg:w-36">
        Like What You See?
      </p>
      <div className="hidden md:block">
        <img src={Arrow} alt="connector arrow" />
      </div>
      <div className="sm:self-end md:ml-8">
        <Button>
          <Link to={"/contact"} className="flex gap-3 items-center">
            Contact <FaArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ContactSection;
