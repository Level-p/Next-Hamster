
import Image from 'next/image'
import React from 'react'

export default function Slider({news}) {
  return (
    <div className='flex flex-col justify-center space-y-4 group sm:hover:shadow-slate-300 sm:shadow-lg dark:sm:border dark:sm:border-gray-600 rounded-lg p-3 transition-shadow duration-200'>
        <Image
        src={news.newsSecondImage || news.newsFirstImage}
        alt=''
        height={150}
        width={200}
        className='rounded-t-lg border-b'
        />
        <div className="p-3">
        <h3 className="font-normal text-lg mb-3 mt-2"><span className="font-bold">Headline</span>: {news.newsHeadline}</h3>
        <span className="tracking-wide">Date: {news.newsDate}</span>
        </div>
    </div>
  )
}
