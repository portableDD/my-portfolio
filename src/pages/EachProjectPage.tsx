import Introduction from "../components/ProjectPage/Introduction";
import SingleProjectDetail from "../components/ProjectPage/SingleProjectDetail";

const EachProjectPage = () => {
  return (
    <div className="md:px-12 flex flex-col gap-4">
      <Introduction />
      <SingleProjectDetail/>
    </div>
  );
};

export default EachProjectPage;
