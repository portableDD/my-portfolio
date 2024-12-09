import { useContext } from "react";
import AllContext from "../features/AllContext";
import StackUi from "./StackUi";

const AllStack = () => {
  const { Stack } = useContext(AllContext);
  return (
    <div className="w-[70%] mx-auto flex justify-evenly items-center my-4">
      {Stack.map((stack, index) => (
        <StackUi key={index} Icons={stack.icons} stack={stack.stack} />
      ))}
    </div>
  );
};

export default AllStack;
