// App.js

import { Element } from 'react-scroll';
import ContactMe from '../resources/ContactMe';
import Header from '../resources/Header';
import Navbar from '../resources/Navbar';
import Projects from '../resources/Projects';
import Skills from '../resources/Skills';
import Timeline from '../resources/Timeline';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Element name="header">
        <Header />
      </Element>
      <Element name="timeline">
        <Timeline />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        {/* <Projects /> */}
      </Element>
      <Element name="contactMe">
        <ContactMe />
      </Element>
    </>
  );
}

export default App;
