import { motion } from 'framer-motion'
import Backdrop from '../Backdrop/index'
import { spring } from 'popmotion';

import React from 'react';

const Modal = (handleClose, text) => {
const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
},
  visible: {
    y: '0',
    opacity: 1,
    transform: {
      duration: 0.1,
      type: spring,
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: '100vh',
    opacity: 0,
  }
}

  return (
    <Backdrop onClick={handleClose}>
      <motion 
      onClick={(e) => e.stopPropogation()}
      className="modal orange-gradient"
      variants={dropIn}
      animate='visible'
      exit='exit'
      >

      </motion>

    </Backdrop>
  );
};

export default Modal;