import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Formic from '../Components/Formic'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Formic/>} />
      </Routes>
    </Router>
  )
}

export default Routing