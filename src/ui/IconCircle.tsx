import { Link } from "react-router-dom";

type Icon = {
  children: React.ReactNode;
  path: string
};

const IconCircle = ({ children, path }: Icon) => {
  return (
    <div className="border border-peach rounded-full w-8 h-8 text-lg flex justify-center items-center">
      <Link to={path} target="blank" rel="noopener noreferrer">
        {children}
      </Link>
    </div>
  );
};

export default IconCircle;
