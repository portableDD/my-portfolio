import AllSkill from "../../ui/AllSkill";

const Overview = () => {
  return (
    <div className="md:px-6 mt-8 flex flex-col gap-3">
      <h2 className="text-3xl">OVERVIEW</h2>
      <p>
        My name is Emmanuel Dorcas Temitope. I'm a passionate frontend developer
        and UI/UX designer with a love for creating beautiful, functional
        digital experiences. My journey into tech began with a fascination for
        how things work on the web, and over time, I honed my skills in React
        JS, Tailwind CSS, Bootstrap, CSS, HTML, JavaScript, Typescript. These
        tools have become second nature to me, allowing me to build responsive
        and dynamic user interfaces that not only look great but perform
        seamlessly across different devices.
      </p>
      <AllSkill />
    </div>
  );
};

export default Overview;
