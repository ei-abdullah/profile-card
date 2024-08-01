import "./App.css";

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
  return (
    <article className="p-5 text-left">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold ">Abdullah Zafar</h1>
      </header>
      <p className="mt-6 text-sm lg:text-base md:text-2xl sm:text-xl font-thin">
        A passionate <span>Full-stack web developer</span> from Pakistan.
        Programming being my passion, I spend a lot of my time infront of
        computer system turning my ideas into reality.
      </p>
      <section className="w-80 mt-5">
        <TechStack name="React" color="lightblue" />
        <TechStack name="NodeJS" color="green" />
        <TechStack name="JavaScript" color="yellow" />
        <TechStack name="HTML/CSS" color="red" />
        <TechStack name="Git" color="orange" />
      </section>
    </article>
  );
};

const TechStack = (props) => {
  return (
    <div className=" inline-block p-3">
      <span
        className="border-2 border-slate-950 py-1 px-2 rounded-lg"
        style={{ backgroundColor: props.color }}
      >
        {props.name}
      </span>
    </div>
  );
};
