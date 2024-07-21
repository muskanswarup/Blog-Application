import React from 'react'

const Login = () => {
  return (
    <div className='w-full flex justify-center items-center h-[70vh]'>
      <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
        <h1 className='text-xl font-bold text-left text-[#2E765E]'>Login to Your Account</h1>
        <input type='text' className='w-full px-4 py-2 border-2 border-[#2E765E] outline-0 rounded-md' placeholder='Enter your email' />
        <input type='password' className='w-full px-4 py-2 border-2 border-[#2E765E] outline-0 rounded-md' placeholder='Enter your password'/>
        <button className='w-full px-4 py-2 bg-[#2E765E] tracking-wide text-white text-lg font-bold rounded-lg hover:bg-teal-700'>Login</button>
      </div>
      
    </div>
  )
}

export default Login
