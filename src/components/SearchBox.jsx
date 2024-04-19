"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'

export default function SearchBox() {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch('')
    router.push(`/search/${search}`)
  }

  return (
    <form id='form' className='flex justify-between p-2 max-w-6xl border dark:border-none rounded' onSubmit={handleSubmit}>
      <input id='search'
      type="text" 
      placeholder="Search movie..." 
      className='w-full rounded-md placeholder-gray-500 outline-none bg-transparent flex-1' 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <button className="text-amber-600 disabled:text-gray-400" disabled={search === ''}  type="submit">
        <FaSearch className='text-2xl'/>
      </button>
    </form>
  )
}
