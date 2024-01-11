import React from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    animate: {
      opacity: 1,
      y: 10,
    },
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="animate" transition={{ staggerChildren: 0.1 }}>
      {text.split('').map((char, index) => (
        <motion.span variants={variants} key={index}>{char}</motion.span>
      ))}
    </motion.div>
  );
};

export default Typewriter;
