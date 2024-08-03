import "./App.css";

const skills = [
  {
    name: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    name: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    name: "Web Design",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    name: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    name: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

export default function App() {
  return <Card />;
}

const Card = () => {
  return (
    <div className="m-5 lg:w-2/5 md:w-auto h-[28rem] flex flex-row-reverse border-4 border-teal-950">
      <img className="w-2/5" src="abdullah.jpg" alt="abdullah" />
      <About />
    </div>
  );
};

const About = () => {
  const sortedSkills = skills.sort((a, b) => {
    const levels = { advanced: 1, intermediate: 2, beginner: 3 };
    return levels[a.level] - levels[b.level];
  });

  return (
    <article className="p-5 text-left">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold ">Abdullah Zafar</h1>
      </header>
      <p className="mt-6 text-sm lg:text-base md:text-2xl sm:text-xl font-thin">
        A passionate{" "}
        <span className="bg-yellow-300 hover:bg-yellow-400 px-1">
          Full-stack web developer
        </span>{" "}
        from Pakistan. Programming being my passion, I spend a lot of my time
        infront of computer system turning my ideas into reality.
      </p>
      <section className="w-96 mt-5">
        {sortedSkills.map((skill) => (
          <TechStack
            key={skill.name}
            skill={skill.name}
            color={skill.color}
            level={skill.level}
          />
        ))}
      </section>
    </article>
  );
};

const TechStack = (props) => {
  return (
    <div className=" inline-block p-3">
      <span
        className="border-2 border-slate-950 py-1 px-4 rounded-lg font-bold"
        style={{ backgroundColor: props.color }}
      >
        {props.skill} {props.level === "advanced" && "III"}
        {props.level === "intermediate" && "II"}
        {props.level === "beginner" && "I"}
      </span>
      <span></span>
    </div>
  );
};
