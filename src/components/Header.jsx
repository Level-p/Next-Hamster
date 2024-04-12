import React from 'react'
import MenuItem from './MenuItem'
import Link from 'next/link'
import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {FaPaw} from 'react-icons/fa'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-5 roboto lg:max-w-6xl mx-auto bg-transparent shadow'>
      <div className='flex items-center gap-4 w-full'>
          <MenuItem title ="home" address="/" Icon={AiFillHome}/>
          <MenuItem title ="about" address="/about" Icon={BsFillInfoCircleFill}/>
          {/* <div className="relative md:w-1/3 w-full">
            <input type="text" className='py-1 px-3 rounded-sm dark:bg-transparent border w-full outline-none'/>
            <AiOutlineSearch className='text-2xl absolute top-1 right-5'/>
          </div> */}
      </div>

      <div className='ml-2 flex items-center gap-4'>
        <DarkModeSwitch/>
        <Link href='/'>
            <span className='text-lg font-medium transition-all duration-200 bg-amber-600  p-2 rounded-md tracking-widest flex gap-2 items-center'>Hamstar
            <FaPaw/>
            </span>
        </Link>
      </div>

    </div>
  )
}
