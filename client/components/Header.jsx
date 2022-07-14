import React from 'react'
import Learn from './Learn'
import { Link } from 'react-router-dom'
// import Path from './Path'  For stretch

function Header() {
  return (
   <header className='header'>
      <h1>MAP LEARN</h1>

      <Link to={<Learn />}> <p>Learn</p> </Link>

      <Link to={<Learn />}> <p>Path</p> </Link>

   </header>
  )
}

export default Header