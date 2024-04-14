import React from 'react'

export default function IntroComponent({Icon, title , text}) {
  return (
    <div className='flex flex-col justify-center items-start space-y-6 roboto px-3 lg:px-0'>
        <Icon className="text-4xl"/>
        <h4 className="text-xl font-semibold tracking-wider">{title}</h4>
        <p className="text-base leading-8">{text}</p>
    </div>
  )
}
