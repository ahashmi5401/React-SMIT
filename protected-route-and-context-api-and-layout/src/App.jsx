import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import ProtectedRoute from './components/ProtectedRoute'
import MainLayout from './layout/MainLayout'
import PublicRoute from './components/PublicRoute'
import AuthLayout from './layout/AuthLayout'

const App = () => {
  return (
    <div>
      <Routes>
      {/* <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} /> */}

      {/* Prtected ROUTE */}
        <Route element={<ProtectedRoute><MainLayout/></ProtectedRoute>}>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/profile' element={<Profile />} /> 
        </Route>
        <Route element={<PublicRoute><AuthLayout/></PublicRoute>}>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/signUp' element={<SignUp/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App