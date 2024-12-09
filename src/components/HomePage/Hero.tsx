import Dp from "../../assets/myDp.png";
import Button from "../../ui/Button";
import Typewritter from "../../ui/Typewriter";
import SocialIcon from "../../ui/SocialIcon";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse gap-5 sm:flex-row justify-evenly items-center rounded-lg ">
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
        <p className="w-full md:w-96">
          I design visually appealing, user-friendly, and responsive websites,
          focusing on seamless transitions, smooth user experiences, and
          meaningful interactions. My passion lies in creating engaging and
          impactful digital experiences.
        </p>
        <div className="mt-1">
          <Button>Download CV</Button>
        </div>
      </div>

      {/* hero img384 320 */}
      <div className="h-[350px] w-[365px] overflow-y-hidden">
        <img src={Dp} alt="my Dp" className="-mt-[80px] w-[100%]" />
      </div>
    </div>
  );
};

export default Hero;
