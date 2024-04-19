"use client"
import Link from "next/link"


export default function Notfound() {
  return (
    <div className="text-center my-10 space-y-6">
        <h1 className="font-bold text-2xl">Not Found.</h1>
        <Link href={'/'} className="transition-all duration-200 hover:text-amber-600 font-semibold p-2" onClick={() => reset()}>Back to home</Link>
    </div>
  )
}
