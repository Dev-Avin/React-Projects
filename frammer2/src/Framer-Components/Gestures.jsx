import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './frammerComp.css'




const Gestures = () => {
  const [val, setval] = useState('Click me');
  return (
    <div
      style={{
       margin:'90px'
      }}
    >
      <motion.button
        className='example-button'
        whileHover={{
             scale: 1.2,
             background:'blueviolet',
             borderRadius:'50px'
            }}
        whileTap={{
            scale: 0.95,
            rotate: 90,
            background:'black',
        }}
        onClick={() => {
 
          setval('Fuck you')
        }}
        onMouseEnter={() => setval('Hovered!')}
        onMouseLeave={() => setval('Click Me')}
        // transition={{
        //     style:" e "
        // }}
        
      >
        {val}
      </motion.button>
    </div>
  );
};

export default Gestures;

//View and Scroll based animations 