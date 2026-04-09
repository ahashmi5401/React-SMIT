import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col md:flex-row border-b border-gray-200 justify-between items-center min-h-[500px] px-6 lg:px-20 py-10 gap-10 bg-white text-black'>
        <div className="left flex flex-col flex-1">
            <h2 className='font-bold text-5xl lg:text-7xl leading-tight mb-6'>
              Web & UI Developer based in PK.
            </h2>
            <p className='text-gray-600 text-lg max-w-lg mb-8'>
                I design and build clean, fast interfaces — turning complex problems into simple, elegant digital experiences.
            </p>
            <div className='flex gap-4'>
                <button 
                onClick={() => navigate('/work')}
                className="border border-gray-300 px-6 py-3 rounded-md cursor-pointer hover:bg-gray-50 transition-all font-medium">
                  View My Work
                </button>
                <button 
                onClick={() => navigate('/contact')}
                className="border border-gray-300 px-6 py-3 rounded-md cursor-pointer hover:bg-gray-50 transition-all font-medium">
                  Contact Me
                </button>
            </div>
        </div>

        <div className="right flex justify-center items-center flex-1">
            <div className="relative">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACOVsUJwG70ohESThB38rv8_Zul84nEU2Xw&s" 
                alt="Muhammad Ayan Hashmi" 
                className='w-[400px] aspect-square object-cover rounded-3xl shadow-lg border border-gray-100' 
              />
            </div>
        </div>
    </div>
  )
}

export default Hero