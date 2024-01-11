import React from 'react';
import { motion } from 'framer-motion';
import './timeline.css';

const Timeline = () => {
  return (
    <>
      <h1>TimeLine</h1>
      <section id="cd-timeline" className="cd-container">
        <motion.div
          initial={{
            scale: 0,
            opacity: 0
          }}
          whileInView={{
            scale: 1,
            opacity: 1
          }}
          className="cd-timeline-block"
        >
          <div className="cd-timeline-img cd-picture"></div>
          <div className="cd-timeline-content">
            <h2>Journey Starts</h2>
            <div className="timeline-content-info">March, 2022</div>
            <p>I started my journey into web-dev with starting to learn HTML and CSS along with making small sites and Copies</p>
            <ul className="content-skills">
              <li>HTML5</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{
            scale: 0,
            opacity: 0
          }}
          whileInView={{
            scale: 1,
            opacity: 1
          }}
          className="cd-timeline-block"
        >
          <div className="cd-timeline-img cd-picture"></div>
          <div className="cd-timeline-content">
            <h2>Journey Continues</h2>
            <div className="timeline-content-info">June, 2022</div>
            <p>Moving on I added styling skills in the form of CSS</p>
            <ul className="content-skills">
              <li>CSS</li>
            </ul>
          </div>
        </motion.div>

<motion.div
  initial={{
    scale: 0,
    opacity: 0
  }}
  whileInView={{
    scale: 1,
    opacity: 1
  }}
  className="cd-timeline-block"
>
  <div className="cd-timeline-img cd-picture"></div>
  <div className="cd-timeline-content">
    <h2>Dev_Lang_Started</h2>
    <div className="timeline-content-info">December, 2022</div>
    <p>I started to learn Javascript, to further advance my Development-skills</p>
    <ul className="content-skills">
      <li>JavaScript</li>
    </ul>
  </div>
</motion.div>

<motion.div
  initial={{
    scale: 0,
    opacity: 0
  }}
  whileInView={{
    scale: 1,
    opacity: 1
  }}
  className="cd-timeline-block"
>
  <div className="cd-timeline-img cd-picture"></div>
  <div className="cd-timeline-content">
    <h2>Skill Aquired</h2>
    <div className="timeline-content-info">Feb , 2023</div>
    <p>I started to learn Bootstrap to make Complex UI with relative ease</p>
    <ul className="content-skills">
      <li>Bootstrap</li>
    </ul>
  </div>
</motion.div>

<motion.div
  initial={{
    scale: 0,
    opacity: 0
  }}
  whileInView={{
    scale: 1,
    opacity: 1
  }}
  className="cd-timeline-block"
>
  <div className="cd-timeline-img cd-picture"></div>
  <div className="cd-timeline-content">
    <h2>Front-End Dev</h2>
    <div className="timeline-content-info">June, 2023</div>
    <p>The turning point was acquired with the start of learning Front-End Library Called REACT</p>
    <ul className="content-skills">
      <li>React</li>
    </ul>
  </div>
</motion.div>

<motion.div
  initial={{
    scale: 0,
    opacity: 0
  }}
  whileInView={{
    scale: 1,
    opacity: 1
  }}
  className="cd-timeline-block"
>
  <div className="cd-timeline-img cd-picture"></div>
  <div className="cd-timeline-content">
    <h2>Additional Skills</h2>
    <div className="timeline-content-info">Nov, 2023</div>
    <p>Built upon the React Framework with the addition of other skills like Axios, Framer</p>
    <ul className="content-skills">
      <li>Axios</li>
      <li>Framer-Motion</li>
    </ul>
  </div>
</motion.div>

<motion.div
  initial={{
    scale: 0,
    opacity: 0
  }}
  whileInView={{
    scale: 1,
    opacity: 1
  }}
  className="cd-timeline-block"
>
  <div className="cd-timeline-img cd-picture"></div>
  <div className="cd-timeline-content">
    <h2>Back End Journey Started</h2>
    <div className="timeline-content-info">Dec, 2023</div>
    <p>I started my BackEnd Journey using Node and Express</p>
    <ul className="content-skills">
      <li>Node</li>
      <li>Express</li>
    </ul>
  </div>
</motion.div>
</section>
</>
);
}

export default Timeline;


