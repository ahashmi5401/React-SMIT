import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-center h-screen items-center bg-gray-50 px-4'>
      {/* Container */}
      <div className="bg-white border border-gray-100 w-full max-w-[400px] p-8 rounded-[2.5rem] shadow-2xl flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Create Account</h2>
          <p className="text-sm text-gray-500">Join our engineering dashboard today.</p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {/* Full Name Field */}
          <div className="space-y-1">
            <label className="text-[11px] uppercase tracking-widest font-bold text-gray-400 ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="Muhammad Ayan Hashmi"
              className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-[11px] uppercase tracking-widest font-bold text-gray-400 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="ayan@dev.com"
              className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-[11px] uppercase tracking-widest font-bold text-gray-400 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="Min. 8 characters"
              className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
            />
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
          Create Account
        </button>

        {/* Divider */}
        <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink mx-4 text-gray-300 text-[10px] uppercase tracking-widest">or</span>
            <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          Already a member? <button onClick={() => navigate('/login')} className="text-blue-600 font-bold cursor-pointer hover:text-blue-700 transition-colors">Log In</button>
        </p>
      </div>
    </div>
  )
}

export default SignUp