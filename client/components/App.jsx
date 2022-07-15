import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion"
// import { fetchFruits } from '../actions'
// import view components
import WorldMap from './WorldMap'
// import components

import Header from './Header'
import Footer from './Footer'

function App () {
  // const fruits = useSelector(state => state.fruits)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchFruits())
  // }, [])

  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path='/' element={<WorldMap />}/>
         
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
