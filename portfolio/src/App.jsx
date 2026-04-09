import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './components/pages/home'
import Work from './components/pages/Work'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Navbar from './components/Navbar'
import Contact from './components/pages/Contact'

const App = () => {
  return (
    <>
    <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='work' element={<Work />} />
    <Route path='/about' element={<About />} />
    <Route path='/resume' element={<Resume />} />
    <Route path='/contact' element={<Contact />} />
   </Routes>
    </>
  )
}

export default App