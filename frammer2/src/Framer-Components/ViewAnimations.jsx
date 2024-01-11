import React, { 
   useEffect // Effects and DependencyArray  
  , useRef   //
} from 'react'

import { motion, useInView } from 'framer-motion'

const ViewAnimations = () => {

 const ref = useRef(null);
 const inView =  useInView(ref,{once : true} );
 useEffect(() => {
   console.log(`IS in View --> ${inView}`);
 }, [inView] )

  return (
   <>
    <div style={{height:"150vh" , width :"100vw"}}>
      
    </div>
    <motion.div
     style = {{height:"100vh" , background:"black" , width :"100vw"}}
     initial = {{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1 , ease:"easeInOut"}}
   // Eaiser Simpler Way
    />
      <div
       ref ={ref}
       style={{
        height:'100vh',
        background: inView? 'blue' :'red',

        transition: '1s background',
        opacity:0.5,
       }}
      />
          

   </>
  )
}

export default ViewAnimations