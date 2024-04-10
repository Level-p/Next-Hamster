import React from 'react'
import MenuItem from './MenuItem'
import Link from 'next/link'
import {AiFillHome} from 'react-icons/ai'
import {FaPaw} from 'react-icons/fa'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-5 roboto lg:max-w-6xl mx-auto bg-transparent shadow'>
      <div className='flex gap-4'>
          <MenuItem title ="home" address="/" Icon={AiFillHome}/>
          <MenuItem title ="about" address="/about" Icon={BsFillInfoCircleFill}/>
      </div>

      <div className='flex items-center gap-4'>
        <DarkModeSwitch/>
        <Link href='/'>
            <span className='text-2xl font-medium transition-all duration-200 bg-amber-600 p-3 rounded-md tracking-widest flex gap-2 items-center'>Hamstar
            <FaPaw/>
            </span>
        </Link>
      </div>

    </div>
  )
}
