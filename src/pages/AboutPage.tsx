import { Link } from "react-router-dom";
import OverviewAbout from "../components/AboutPage/Overview";
import AllSkill from "../ui/AllSkill";
import AllStack from "../ui/AllStack";
import Button from "../ui/Button";

const AboutPage = () => {
  return (
    <div className="md:px-12 flex flex-col gap-4">
      <OverviewAbout />
      <AllStack />
      <AllSkill />
      <div className="flex flex-col md:flex-row justify-between mt-8">
        <h2 className="text-2xl capitalize">
          Check out my open sources contribution
        </h2>
        <Button>
          <Link
            to={"https://app.onlydust.com/users/portableDD/overview"}
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Contribution
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
