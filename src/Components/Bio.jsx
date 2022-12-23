import React from 'react';
import { SiBootstrap, SiCanva, SiCss3, SiGithub, SiHtml5,SiJavascript, SiMaterialui, SiNodedotjs, SiReact, SiTailwindcss, SiNetlify } from 'react-icons/si';

export const Bio = () => {
  return (
    <div id='Bio' className='w-full h-[100vh] bg-black flex flex-col justify-center'>
      <div className='w-full grid lg:grid-cols-2 pl-[10vh] pr-[10vh]'>
        <div className='lg:text-right'>
          <h3 className='text-[#00FFFF] text-3xl lg:text-6xl'>Bio</h3>
          <p className='text-[#F0F8FF] font-bold text-xs lg:text-sm'>Ho iniziato a studiare per diventare un Full Stack Developer da inizio estate 2022 e qui sono presenti le tecnologie che ho utilizzato in questi mesi.<br/>
          Sono in cerca di un primo impiego nel settore come Front-End Developer in attesa di approfondire le conoscenze rimanenti, necessarie per svolgere al meglio il ruolo di Full Stack Developer.</p>
        </div>
        <div className='text-[#009B77] grid grid-cols-4 pl-8 pr-6 pt-16'>
          <div className='py-2 px-2'><SiHtml5 /></div>
          <div className='py-2 px-2'><SiCss3 /></div>
          <div className='py-2 px-2'><SiJavascript /></div>
          <div className='py-2 px-2'><SiReact /></div>
          <div className='py-2 px-2'><SiTailwindcss /></div>
          <div className='py-2 px-2'><SiNodedotjs /></div>
          <div className='py-2 px-2'><SiCanva /></div>
          <div className='py-2 px-2'><SiGithub /></div>
          <div className='py-2 px-2'><SiMaterialui /></div>
          <div className='py-2 px-2'><SiBootstrap /></div>
          <div className='py-2 px-2'><SiNetlify /></div>
        </div>
      </div>
    </div>
  )
}