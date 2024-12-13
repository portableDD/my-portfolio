import Dp from "../../assets/myDp.png";
import Button from "../../ui/Button";
import Typewritter from "../../ui/Typewriter";
import SocialIcon from "../../ui/SocialIcon";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse gap-5 sm:flex-row justify-evenly items-center rounded-lg sm:my-4 lg:my-0 ">
      {/* icon */}
      <div className="flex sm:flex-col gap-3 text-peach">
        <SocialIcon />
      </div>
      {/* name and title */}
      <div className="flex flex-col gap-3 ">
        <p className="text-xl">Hello</p>
        <p className="uppercase text-2xl text-peach">
          A{" "}
          <Typewritter
            words={["FRONT-END WEB DEVELOPER", "Ui/Ux Designer"]}
            speed={100}
          />
        </p>
        <h1 className="text-3xl">Emmanuel Dorcas Temitope</h1>
        <p className="w-full lg:w-96">
          I design visually appealing, user-friendly, and responsive websites,
          focusing on seamless transitions, smooth user experiences, and
          meaningful interactions. My passion lies in creating engaging and
          impactful digital experiences.
        </p>
        <div className="mt-1">
          <Button>
            <Link
              to={
                "https://drive.google.com/file/d/17i7QWmHysa9X8Ni_v5VLyeB1srQ39p14/view?usp=sharing"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </Link>
          </Button>
        </div>
      </div>

      {/* hero img384 320 */}
      <div className="h-[350px] w-[365px] sm:h-[250px] sm:w-[1000px] lg:h-[350px] lg:w-[365px] overflow-y-hidden">
        <img src={Dp} alt="my Dp" className="-mt-[20%] w-[100%]" />
      </div>
    </div>
  );
};

export default Hero;
