import { IconType } from "react-icons";

type SkillProps = {
  Icons: IconType;
  skill: string;
};

const Skill = ({ Icons, skill }: SkillProps) => {
  return (
    <div className="bg-layoutBg rounded-lg border-b border-peach px-2 pt-2 shadow-navbar w-36">
      <Icons className="text-peach text-xl" />
      <p className="text-center mt-2">{skill}</p>
    </div>
  );
};

export default Skill;
