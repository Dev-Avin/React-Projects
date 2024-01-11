// Bubbles.js

// import React from 'react';
import { motion } from 'framer-motion';
import './bubbles.css';

const Bubbles = ({ children, index ,  }) => {
  // Generate random positions for bubbles
  const randomTop = `${Math.floor(Math.random() * 80) }%`; // Adjust the range based on your layout
  const randomLeft = `${Math.floor(Math.random() * 80)}%`;

  return (
    <motion.div
      className='bubbles'
      initial={{
        scale: 0,
        top: randomTop,
        left: randomLeft,
      }}
      whileInView={{
        scale: [0, 1, 1], // Animate from 0 to 1 and back to 0
        transition: { duration: 3, repeat: Infinity ,delay : index*1 },
        opacity: 0, // Optional: Set opacity to 0 after the animation
      }}
    >
      {children}
    </motion.div>
  );
};

export default Bubbles;
