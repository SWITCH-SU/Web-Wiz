import React from 'react'

const Hero = ({theme}) => {
  return (
    <div className={theme ? 'max-w-[1640px] mx-auto p-4' : 'bg-[#0e1111] max-w-[1640px] mx-auto p-4'}>
      <div className='max-h-[500px] relative'>
        {/*Overlay */}
        <div className='absolute w-full h-full bg-black/40 text-gray-200 max-h-[500px] flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' >Track. <span className='text-green-600'>Train.</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' ><span className='text-green-600'>Transform.</span> Triumph.</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/7811528/pexels-photo-7811528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
    </div>
  )
}

export default Hero