import { IconType } from "react-icons";

type StackProps = {
  Icons: IconType;
  stack: string;
};
const StackUi = ({Icons, stack}: StackProps) => {
  return (
    <div className="bg-layoutBg rounded-full w-40 h-40 flex flex-col justify-center items-center gap-3 ">
        <Icons className="text-4xl text-peach" />
        <p className="uppercase text-xl text-center">{stack}</p>
    </div>
  )
}

export default StackUi