import { Link } from "react-router-dom";
import Button from "../ui/Button";

const OpenSources = () => {
  return (
    <div className="flex flex-col gap-4 md:px-6 mt-8">
      <h2 className="text-3xl capitalize">Open Sources</h2>
      <p className="-mt-2">My contributions to the open-source community.</p>

      <div className="flex flex-col gap-4 pt-4">
        <h3 className="text-2xl">Active Contributor</h3>
        <p className="text-gray-400 text-[11px] -mt-3">
          Projects in the blockchain space, Starknet, Stellar and WorldCoin
          Ecosystems with codebase written in JavaScript, TypeScript, React and
          Next.js.
        </p>
        <p>
          I actively contribute to various open-source projects, focusing on
          frontend development and UI improvements. Check out my contribution
          history and the projects I'm involved with on OnlyDust.
        </p>
        <div className="flex justify-end items-center">
          <Button>
            <Link
              to={
                "https://app.onlydust.com/users/portableDD/overview"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Contribution 
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OpenSources;
