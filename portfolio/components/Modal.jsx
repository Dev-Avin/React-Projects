import { motion } from 'framer-motion';
import './Modal.css';

const Modal = ({ title, image }) => {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0
      }}
      whileInView={{
        scale: 1,
        opacity: 1
      }}
      className='modal'
    >
      <motion.div
        className='overlay'
        initial={{
          opacity: 1
        }}
        whileHover={{
          opacity: 0.5
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h1>{title}</h1>
      </motion.div>
      <div className="image">
        <img src={image} alt="image" />
      </div>
    </motion.div>
  );
};

export default Modal;
