"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Suspense } from "react"

export default function Pages({title , param}) {
    const page = usePathname()
  return (
    <Suspense>
        <Link 
        className={`transition-colors duration-200 hover:text-amber-400 font-semibold ${page.split('/')[1] === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg': ''}`}
        href={`/${param}`}>{title}</Link>
    </Suspense>
  )
}
