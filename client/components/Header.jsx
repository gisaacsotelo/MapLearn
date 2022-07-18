import React, { useState } from "react" 
import Learn from './Learn'
import Play from './Play'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';

import { Heading } from '@chakra-ui/react'


function Header() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  
  let status = () => "Learn"
  const title = 'Map Learn!'

  if (status === 'Learn'){
    title = 'Map Learn!'
    console.log(status)
  } else if (status === 'Play'){
    title = 'Map Play!'
    console.log(status)
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <>
    
  
    
    <chakra.header id="header"> 
    <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-evenly"
      >
      {/* <motion.header className='heading' animate={{ x: 100 }} > */}
      <div className='earthgif'>
        <img src="./images/earth.gif" alt="rotating earth gif"/>
      </div>
        <motion.div className='title-container'
          whileHover={{ scale: 1.1 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}>
        <Heading size='lg' fontSize='50px' className="title">{title} 	&#128506;</Heading>
      {/* </motion.header> */}
      </motion.div>
      <nav>
        <Link onClick={status='Learn'} className='button-38' to={'/'}> Learn </Link>
        <Link onClick={status='Play'} className='button-38' to={'/play'}> Play </Link>
      </nav>
      </Flex>
    </chakra.header>
    
    </>
  )
}

export default Header