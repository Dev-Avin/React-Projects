import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => { 
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    // Set initial dimensions
    // setWindowWidth(window.innerWidth);
    // setWindowHeight(window.innerHeight);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <p>Device Width: {windowWidth}px</p>
      <p>Device Height: {windowHeight}px</p>
    </div>
  );
};



// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [position, setPosition] = useState({ top: 20, left: 30 });

//   const updatePosition = () => {
//     setPosition({ top: 50, left: 70 });
//   };

//   return (
//     <div style={{ position: 'relative', ...position }}>
//       Your Component Content
//       <button onClick={updatePosition}>Update Position</button>
//     </div>
//   );
// };


export default MyComponent;