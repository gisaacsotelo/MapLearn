import React, { useState } from "react" 
import Learn from './Learn'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';

import { Heading } from '@chakra-ui/react'


function Header() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);


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
        justify="space-between"
      >
      {/* <motion.header className='heading' animate={{ x: 100 }} > */}
        <motion.div  whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}>
        <Heading size='lg' fontSize='50px'>Map Learn! 	&#128506;</Heading>
      {/* </motion.header> */}
      </motion.div>
      <nav>
        <Link class='button-38' to={<Learn />}> Learn </Link>
        <Link class='button-38' to={<Learn />}> Play </Link>
      </nav>
      </Flex>
    </chakra.header>
    
    </>
  )
}

export default Header