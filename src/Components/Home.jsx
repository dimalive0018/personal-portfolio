import React from 'react';
import { CgArrowDownR } from 'react-icons/cg';

export const Home = () => {
  return (
    <div id='Home' className='w-full h-[100vh] bg-black'>
      <div className='flex flex-col justify-center h-[100vh] w-full pl-[5vh]'>
        <h3 className='text-[#F0F8FF] font-bold text-xs lg:text-sm'>Ciao,</h3>
        <h3 className='text-[#F0F8FF] font-bold text-xs lg:text-sm'>il mio nome è </h3>
        <h1 className='text-[#00FFFF] text-3xl lg:text-6xl'>Livio Dimola</h1>
        <div className='flex flex-col justify-center pl-[0vh] lg:pl-[20vh]'>
          <h3 className='text-[#F0F8FF] font-bold text-xs lg:text-sm'>e sono un</h3>
          <h2 className='text-[#00FFFF] text-3xl lg:text-6xl'>Full Stack Developer</h2>
          <button className='text-white border-x-4 w-[6vh] h-[6vh]'>
            <a href='#Bio'><CgArrowDownR className='hover:translate-y-4 active:scale-90 w-[5vh] h-[5vh]'/></a>
          </button>
        </div>
      </div>
    </div>
  )
}
