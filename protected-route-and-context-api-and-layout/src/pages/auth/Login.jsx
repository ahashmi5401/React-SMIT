import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center h-screen items-center bg-gray-50'>
      {/* Main Container */}
      <div className="bg-white border border-gray-200 w-[350px] p-8 rounded-3xl shadow-xl flex flex-col gap-6">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-1">Please enter your details</p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold ml-1 text-gray-600">Email</label>
            <input 
              type="email" 
              placeholder="ayan@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold ml-1 text-gray-600">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Action Button */}
        <button 
        onClick={() => navigate('/')}
         className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all active:scale-[0.98]">
          Sign In
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500">
          Don't have an account? <button onClick={() => navigate('/signup')} className="text-blue-600 font-bold cursor-pointer hover:underline">Sign up</button>
        </p>
      </div>
    </div>
  )
}

export default Login