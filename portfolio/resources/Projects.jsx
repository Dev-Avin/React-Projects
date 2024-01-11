import Modal from "../components/Modal";
import './projects.css';

const projs = [
  {
    title: "Static Site",
    image: "https://picsum.photos/200/300"
  },
  {
    title: "Calculator",
    image: "https://picsum.photos/200/300"
  },
  {
    title: "Weather App",
    image: "https://picsum.photos/200/300"
  },
  {
    title: "Todo App",
    image: "https://picsum.photos/200/300"
  }
];

const Projects = () => {
  return (
    <div className="projs">
      <h2>Projects</h2> 
      <div className="projects-container">
      {projs.map((proj, index) => {
        const className = index % 2 == 0 ? "left" : "right";
        return (
          <div key={index} className={className}>
            <Modal key={index} title={proj.title} image={proj.image} />
            <div/>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Projects;
