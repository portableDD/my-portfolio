import { useLocation } from "react-router-dom";

const Introduction = () => {
  const location = useLocation();
  const checkLocation = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className="mt-8 flex flex-col gap-3">
      <p>WHAT I HAVE WORKED ON!</p>
      <h2 className="text-3xl font-semibold">PROJECTS</h2>
      {checkLocation("/project") ? (
        <p>
          The following projects showcase my skills and experience through
          real-world examples of my work.
        </p>
      ) : (
        <p>
          This project is briefly described with links to its respective code
          repositories and live demo. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </p>
      )}
    </div>
  );
};

export default Introduction;
