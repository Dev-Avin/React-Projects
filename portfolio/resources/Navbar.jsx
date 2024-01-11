import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import aLogo from '../assets/a-logo.jpg';

import './navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
 
  return (
    <div className='portfolio-navbar'>
          <div className='portfolio-navbar-logo'>
      <div className='portfolio-navbar-logo-img' onClick={scrollToTop}>
        <img src={aLogo} alt="Logo" />
      </div>
    </div>

      <div className='portfolio-navbar-links'>
        <div className="linkcontainer">
          <Link to="timeline" smooth={true} duration={500}>Timeline</Link>
        </div>
        <div className="linkcontainer">
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </div>
        {/* <div className="linkcontainer">
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </div> */}
        {/* <div className="linkcontainer">
          <Link to="interests" smooth={true} duration={500}>Interests</Link>
        </div> */}
        <div className="linkcontainer">
          <Link to="contactMe" smooth={true} duration={500}>Contact Me</Link>
        </div>
      </div>
      <div className='portfolio-navbar-themes'>
        (0 +)
      </div>
      <div className='portfolio-navbar-smallscreen'>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Open' : 'Close'}
        </button>
        {isVisible && (
          <div className='portfolio-navbar-smallscreen-links' style={{ top: '60px', position: 'absolute' }}>
            <div className="linkcontainer">
              <Link to="header" smooth={true} duration={500}>Header</Link>
            </div>
            <div className="linkcontainer">
              <Link to="timeline" smooth={true} duration={500}>Timeline</Link>
            </div>
            <div className="linkcontainer">
              <Link to="skills" smooth={true} duration={500}>Skills</Link>
            </div>
            <div className="linkcontainer">
              <Link to="projects" smooth={true} duration={500}>Projects</Link>
            </div>
            <div className="linkcontainer">
              <Link to="interests" smooth={true} duration={500}>Interests</Link>
            </div>
            <div className="linkcontainer">
              <Link to="contactMe" smooth={true} duration={500}>Contact Me</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
