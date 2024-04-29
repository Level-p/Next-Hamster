"use client"
import { Suspense, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AnimeSearchBox() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/manga/${search}`)
        setSearch('')
  }

  return (
    // <Suspense>
    <form id='form' className='flex justify-between px-5 max-w-6xl mx-auto border dark:border-none rounded-md mt-5' onSubmit={handleSubmit}>
      <input id='search'
      type="text" 
      placeholder="Search anime..." 
      className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1' 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <button className="text-amber-600 disabled:text-gray-400" disabled={search === ''}  type="submit">Search</button>
    </form>
    // </Suspense>
  )
}
