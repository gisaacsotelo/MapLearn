import React from 'react'
import { motion } from 'framer-motion'
import { Heading } from '@chakra-ui/react'


function Header() {
  return (
  
      <motion.div className='heading' animate={{ x: 100 }} >
      <Heading size='lg' fontSize='50px'>Map Learn!</Heading>
      {/* <button>Learn</button> */}
      {/* <button>Learn</button> */}
      {/* <PhoneIcon /> */}
      </motion.div>
      
  )
}

export default Header