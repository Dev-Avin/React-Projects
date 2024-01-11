
import './App.css';
import BaicsOfMotion from './Framer-Components/BaicsOfMotion';
import Gestures from './Framer-Components/Gestures';
import AnimationControls from './Framer-Components/AnimationControls';
import ViewAnimations from './Framer-Components/ViewAnimations';
import ScrollAnimations from './Framer-Components/ScrollAnimations';


function App() {
  return (
    <div className="App"   >
      <ScrollAnimations/>
    <div 
      style={{
      display: 'grid',
      placeContent: 'center',
      // height: '100vh',
      gap: '0.8rem',
    }}
  >
     <BaicsOfMotion/>
     <Gestures/>
     <AnimationControls/>
     <ViewAnimations/>
      </div> 
    </div> 
  );
}
export default App;
