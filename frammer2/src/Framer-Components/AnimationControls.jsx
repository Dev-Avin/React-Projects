import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const AnimationControls = () => {

  const variants =
  {
    initial : {
      rotate : "0deg",
    },
    final : {
      rotate : "360deg",
    },
    flip : {
      rotate : "180deg",
    },
    banana : {
      rotate : "3600deg",
    },
    
  }
  
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start('flip');
  }
  const bananaF = () => {
    controls.start('banana')
  }

  return (
    <>
    <button 
     className="example-button"
     onClick={handleClick}
    >
      Flip it 
    </button>
     <motion.div  
      style={{
        width: 150,
        height: 150,
        background: 'black',
      }}
      variants={variants}
      initial="initial"
      animate={controls}
      whileHover={bananaF}
    >
        
     </motion.div>
    </>
  )

}

export default AnimationControls

//Why do the animations triggers only once 
