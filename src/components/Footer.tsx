import SocialIcon from "../ui/SocialIcon";

const HomeFooter = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-blackGradient rounded-lg border-t border-peach">
      <div className="py-1.5 flex flex-col gap-3 sm:flex-row justify-center items-center">
        <p className="font-semibold">
          {/* <FaRegCopyright className="inline mr-1 text-peach" /> */}
          &copy; {year} ED design. All Right Reserved
        </p>
        <div className="hidden sm:block border-r border-[#CDCFD6] py-5"></div>
        <div className="flex gap-3 text-peach">
          <SocialIcon />
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
