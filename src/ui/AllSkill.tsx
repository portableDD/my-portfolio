import { useContext } from "react";
import Skill from "./Skill";
import AllContext from "../features/AllContext";

const AllSkill = () => {
    const { SkillDetails } = useContext(AllContext);
  return (
    <div className="w-[85%] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-3">
    {SkillDetails.map((skill, index) => (
      <Skill key={index} Icons={skill.icons} skill={skill.skill} />
    ))}
  </div>
  )
}

export default AllSkill