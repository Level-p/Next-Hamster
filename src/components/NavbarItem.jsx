"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from 'react'

export default function NavbarItem({title , param}) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
  return (
    <Suspense>
        <Link 
        className={`transition-colors duration-200 hover:text-amber-400 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg': ''}`}
        href={`/?genre=${param}`}>{title}</Link>
    </Suspense>
  )
}
