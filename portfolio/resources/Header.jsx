import  { useEffect, useState } from 'react';
import Typewriter from '../components/Typewriter';
import {  motion } from 'framer-motion';
import './header.css';
import { blue } from '@mui/material/colors';
// import arrow from './assets/arrow.svg';

const textArray = ['Web Designer', 'Full Stack Dev', 'Linux Enthusiast'];


const Header = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const getCurrentText = () => textArray[textIndex];

  return (
    <>
    <div className='portfolio-header'>
      <div className='portfolio-header-text'>
        <div className='spacer'/>
        <h1>
          Hi, There
          <br />
          Myself Avin,
          <br />
          And I am
          <br />
          <Typewriter key={textIndex} text={getCurrentText()} />
        </h1>
           
      </div>
      <div className='align-center'>
        <h2>
          Scroll Down to know more About me
        </h2>
        <div className='arrow-container'>
      <motion.div className='test-div'
  initial={{
    scale: 0,
  }}
  whileInView={{
    scale: [0, 1,1], // Animate from 0 to 1 and back to 0
    transition: { duration: 3, repeat: Infinity },
    opacity: 0, // Optional: Set opacity to 0 after the animation
  }}
>
<svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 330 330" xml:space="preserve">
<path id="XMLID_337_" d="M253.858,234.26c-2.322-5.605-7.792-9.26-13.858-9.26h-60V15c0-8.284-6.716-15-15-15
	c-8.284,0-15,6.716-15,15v210H90c-6.067,0-11.537,3.655-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347l75,75
	C157.322,328.536,161.161,330,165,330s7.678-1.464,10.607-4.394l75-75C254.896,246.316,256.18,239.865,253.858,234.26z M165,293.787
	L126.213,255h77.573L165,293.787z"/>
</svg>
</motion.div>
      </div>
      </div>
     
      <div className='portfolio-header-dec'>
      <motion.div
       className='roundedsquare w-30'
       style={{
         background : blue,
         
        }}
        initial={{ rotate: 0 }}
        whileInView={{
          rotate: 270,
          transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}/>
      <motion.div
       className='roundedsquare w-40'
       initial={{ rotate: 0 }}
       whileInView={{
         rotate: 90,
         transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}/>
      <motion.div
       className='roundedsquare w-10'
       initial={{ rotate: 0 }}
       whileInView={{
         rotate: 180,
         transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}/>

      </div>

    </div>
    {/* <div className='spacer'/>
    <hr/> */}
    </>
  );
};

export default Header;

