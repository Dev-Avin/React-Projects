import Bubbles from "../components/Bubbles";
import './skills.css';
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const skillArray = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODE', 'EXPRESS', 'Axios', 'MATERIAL UI', 'BOOTSTRAP', 'TAILWIND', 'GIT'];

const Skills = () => {

  const ref = useRef(null);
  const inView =  useInView(ref,{threshold: .1} );
 

  return (
    <div className="portfolio-skills">
      <div className="portfolio-skills-title">
        <h1>Skills</h1>
      </div>
      <div className="portfolio-skills-container" ref={ref}>
        {inView && (
          <>
            {skillArray.map((skill, index) => (
              <Bubbles key={index} index={index}>
                {skill}
              </Bubbles>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Skills;
