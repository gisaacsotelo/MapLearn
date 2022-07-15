import React from 'react'
import Learn from './Learn'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heading } from '@chakra-ui/react'


function Header() {
  return (
    <header>
      {/* <motion.header className='heading' animate={{ x: 100 }} > */}
        <Heading size='lg' fontSize='50px'>Map Learn!</Heading>
      {/* </motion.header> */}
      <nav>
        <Link to={<Learn />}> <p>Learn</p> </Link>
        <Link to={<Learn />}> <p>Play</p> </Link>
      </nav>
    </header>
   
  )
}

export default Header