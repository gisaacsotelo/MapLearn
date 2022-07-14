import React from 'react'
import Learn from './Learn'
// import Path from './Path'  For stretch

function Header() {
  return (
   <header className='header'>
      <h1>MAP LEARN</h1>

      <Link to={<Learn />}> <p>Learn</p> </Link>

      <Link to={<Path />}> <p>Path</p> </Link>
      
   </header>
  )
}

export default Header