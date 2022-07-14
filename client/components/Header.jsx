import React from 'react'
import Learn from './Learn'
import { Link } from 'react-router-dom'
// import Play from './Play'  For stretch

function Header() {
  return (

   <header className='header'>
      <h1>MAP LEARN</h1>
      
      <nav>

        <Link to={<Learn />}> <p>Learn</p> </Link>

        <Link to={<Learn />}> <p>Play</p> </Link>

      </nav>

   </header>
   
  )
}

export default Header