import React from 'react';
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <div className='w-full flex justify-center items-center h-[70vh]'>
    <div className='flex flex-col justify-center items-center space-y-6 w-[90%] md:w-[40%] lg:w-[33%] p-6 bg-white rounded-lg shadow-lg'>
      <h1 className='text-2xl font-bold text-left text-[#2E765E]'>Create an Account</h1>
      <input type='text' className='w-full px-4 py-2 border-2 border-[#2E765E] outline-0 rounded-md' placeholder='Enter your name' />
      <input type='text' className='w-full px-4 py-2 border-2 border-[#2E765E] outline-0 rounded-md' placeholder='Enter your email' />
      <input type='password' className='w-full px-4 py-2 border-2 border-[#2E765E] outline-0 rounded-md focus:border-teal-700' placeholder='Enter your password'/>
      <button className='w-full px-4 py-2 bg-[#2E765E] tracking-wide text-white text-lg font-bold rounded-lg hover:bg-teal-700'>Login</button>
      <div className='flex justify-center items-center space-x-4 text-xs text-[#2E765E] font-md tracking-wider' >
        <p>Already have an account?</p>
        <p className='hover:text-black'><Link to="/sign-up">Login</Link></p>
      </div>
    </div>

    
  </div>
  )
}

export default SignUp
