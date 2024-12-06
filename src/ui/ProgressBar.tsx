type Progress = {
  currentProgress: number;
};

const ProgressBar = ({ currentProgress }: Progress) => {
    const totalSteps = 10;
  return (
    <div className="flex space-x-2 justify-center">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            index < currentProgress ? "bg-skillCircleLightColor" : "bg-skillCircleDarkColor"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
