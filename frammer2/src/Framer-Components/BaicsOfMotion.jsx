import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './frammerComp.css'
const BasicsOfMotion = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
   <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
        layout
        transition ={{ duration: 0.5, ease: "easeInOut" }}
      >
        Show/Hide
      </motion.button>

        <AnimatePresence mode=' popLayout '>
      {isVisible && (
          <motion.div
            initial={{
              rotate: '0deg',
              background: 'black',
              border: '2px solid red',
              scale: 0,
              y:0,
              
            }}
            animate={{
              rotate: '180deg',
              background: 'aqua',
              border: '2px solid red',
              borderRadius: '50',
              scale: 1,
              y:50,
            }}
            exit={{
              rotate: '0deg',
              background: 'black',
              border: '2px solid red',
              scale: 0,
              y:0,
            }}
            transition={{
              duration: .5,
              type: 'backInOut',
              
            }}
            style={{
              width: 150,
              height: 150,
              background: 'black',
            }}
          ></motion.div>
          )}
        </AnimatePresence>
    </>
  );
};

export default BasicsOfMotion;
