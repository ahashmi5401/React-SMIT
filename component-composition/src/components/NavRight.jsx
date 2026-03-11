import React from 'react'

const NavRight = ({ children }) => {
  console.log(children[1])
  return (
    <div className="list flex justify-between">
      <ul className='flex justify-between w-96'>
        <li className='cursor-pointer'>About Us</li>
        <li className='cursor-pointer'>Our Project's</li>
        <li className='cursor-pointer'>Our Team</li>
        {children}
      </ul>
    </div>
  )
}

export default NavRight