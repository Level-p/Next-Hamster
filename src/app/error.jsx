"use client"

import { useEffect } from "react"

import React from 'react'

export default function Error({error, reset}) {
useEffect(() => {
    console.log(error);
}, [error])
  return (
    <div className="text-center my-10 space-y-6">
        <h1>Something went wrong, Please try again later.</h1>
        <button className="transition-all duration-200 hover:text-amber-600 font-semibold p-2" onClick={() => reset()}>Try Again</button>
    </div>
  )
}
