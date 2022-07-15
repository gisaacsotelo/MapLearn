import React from 'react'
import Learn from './Learn'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heading } from '@chakra-ui/react'


function Header() {
  return (
  
      <motion.header className='heading' animate={{ x: 100 }} >
      <Heading size='lg' fontSize='50px'>Map Learn!</Heading>
      
      <nav>

        <Link to={<Learn />}> <p>Learn</p> </Link>
        <Link to={<Learn />}> <p>Play</p> </Link>

      </nav>
    </motion.header>
 
   
  )
}

export default Header