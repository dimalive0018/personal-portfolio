import React from 'react'
import Logo from '../Assets/Logo.png'
import { FaBinoculars} from 'react-icons/fa';
import { GiBinoculars } from 'react-icons/gi';
import { SiGithub, SiFreecodecamp } from 'react-icons/si'

export const Nav = ({ cambioMenu, menu }) => {
  return (
    <div className='fixed w-[100%] h-[10vh] bg-black flex justify-around items-center text-white'>
        <div>
            <a href='#Home'><img className='w-[10vh] h-[10vh]' src={Logo} alt='Logo Livio Dimola'></img></a>
        </div>
        <div>
            <ul className='hidden lg:flex font-semibold text-right'>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#Bio'>Bio</a></li>
                <li><a href='#Progetti'>Progetti</a></li>
                <li><a href='#Contattami'>Contattami</a></li>
            </ul>
        </div>
        <div onClick={cambioMenu} className='lg:hidden cursor-pointer z-20'>
            {!menu ? <FaBinoculars className='w-[3vh] h-[3vh]' /> : <GiBinoculars className='w-[3vh] h-[3vh]' />}
        </div>
        <div className={!menu ? 'hidden' : 'absolute w-full h-[100vh] bg-black text-white top-0 right-0 bottom-0 left-0 flex justify-center items-center text-2xl font-bold z-10'}>
            <ul>
                <li><a href='#Home' onClick={cambioMenu}>Home</a></li>
                <li><a href='#Bio' onClick={cambioMenu}>Bio</a></li>
                <li><a href='#Progetti' onClick={cambioMenu}>Progetti</a></li>
                <li><a href='#Contattami' onClick={cambioMenu}>Contattami</a></li>
            </ul>
        </div>
        <div className='hidden lg:flex fixed right-0 top-[10vh]'>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/liviodimola'><SiGithub className='text-white w-[4vh] h-[4vh]' /></a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.freecodecamp.org/italian/LivioDimola'><SiFreecodecamp className='text-[#006400] w-[4vh] h-[4vh]' /></a>
                </li>
            </ul>
        </div>
        <div className='flex fixed lg:hidden'>
            <ul className='flex fixed flex-row bottom-0 right-[2vh]'>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/liviodimola'><SiGithub className='text-[#FF0099] w-[3vh] h-[3vh]' /></a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.freecodecamp.org/italian/LivioDimola'><SiFreecodecamp className='text-[#006400] w-[3vh] h-[3vh]' /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}
