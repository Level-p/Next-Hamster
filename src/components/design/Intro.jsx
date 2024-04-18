import React from 'react'
import IntroComponent from '../IntroComponent'
import { GiLaptop} from 'react-icons/gi'
import {CiCalendarDate} from 'react-icons/ci'
import {FaGlobeAfrica, FaDollyFlatbed} from 'react-icons/fa'

export default function Intro() {
  return (
    <div className='px-6 py-20 my-10 bg-slate-100 dark:bg-slate-950'>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center space-y-5 lg:space-y-0 justify-center gap-3">
            <IntroComponent  Icon={FaGlobeAfrica} title='Works WorldWide' text='No other free streaming service delivers more content to and from more countries worldwide.'/>
            <IntroComponent  Icon={CiCalendarDate} title='Thousands of Titles' text='Choose from movies, shows, sports and music documentaries, AMC series, Live TV and more.'/>
            <IntroComponent  Icon={GiLaptop} title='Device-Friendly' text='Stream the good stuff from your favorite devices including Apple, Android, Smart TVs and more.'/>
            <IntroComponent  Icon={FaDollyFlatbed} title='Always 100% Free' text='Welcome to instant gratification at its best. Watch now without any payment or subscription and end the search for free movie websites.'/>
        </div>
    </div>
  )
}
