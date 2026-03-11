import React from 'react'
import NavRight from "./NavRight"
import NavLogo from './NavLogo'

const NavBar = () => {
  return (
    <div className='h-[10vh] flex shadow-2xl justify-between items-center w-full p-2'>
      <NavLogo />
      <NavRight > 
        <li><button className='bg-green-400  p-1'>Contact Us</button></li>
      </NavRight>
    </div>
  )
}

export default NavBar