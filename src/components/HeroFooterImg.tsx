import Dp from "../assets/myDp.png";

type Gradients = {
  from: string;
  to: string;
};

const HeroFooterImg = ({ from, to }: Gradients) => {
  return ( 
    <div className="h-60 overflow-y-hidden pt-4">
      <div
        style={{
          background: `linear-gradient(to right, ${from}99, ${to}99)`,
        }}
        className={`w-60 h-60 rounded-full`}
      ></div>
      <div className="-mt-[315px] ">
        <img src={Dp} alt="my Dp" className="w-60 " />
      </div>
    </div>
  );
};

export default HeroFooterImg;
