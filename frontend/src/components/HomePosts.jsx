import React from 'react'

const HomePosts = () => {
  return (
    <div className='w-full flex mt-8 space-x-4'>
      {/* Left */}
      <div className='w-[35%] h-[200px] flex justify-center items-center'>
        <img src='https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Artificial Intelligence' className='rounded-lg h-full w-full object-cover'/>
      </div>

      {/* Right */}
      <div className='flex flex-col w-[65%] p-2'>
        <h1 className='text-xl font-bold text-teal-700'>
          10 Uses of Artificial Intelligence in Day to Day Life
        </h1>
        <div className='flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4'>
          <p>@muskoneldev</p>
          <div className='flex space-x-2'>
            <p>10/04/2024</p>
            <p>16:45</p>
          </div>
        </div>
        <p className='text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam quam architecto perspiciatis. Est cumque repellat fugit deserunt odio minima sint iure illum.</p>
      </div>
    </div>
  )
}

export default HomePosts
