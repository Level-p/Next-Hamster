"use client"

export default function Hero() {
  return (
    <div 
    className='min-h-screen relative z-10 bg-none background roboto border-b dark:border-none '
    >
        <div className="hidden dark:block absolute  inset-0 bg-[rgba(0,0,0,0.5)] h-full z-10"></div>
        <div className="mx-auto max-w-2xl py-32 md:py-20 text-center space-y-12 md:space-y-10 z-20 absolute inset-0 px-5">
            <h1 className='text-4xl md:text-6xl tracking-wide font-bold leading-10'>Your streaming guide for movies, TV shows & sports</h1>

            <p className='text-lg tracking-wider dark:text-gray-200'>Find where to stream new, popular & upcoming entertainment with Hamster</p>

            <div className="flex flex-col md:flex-row px-5 justify-center gap-6">
            <button className='custom-btn bg-amber-600 border-none'>Explore movies & Tv shows</button>
            <button className='custom-btn border-slate-900 dark:border-white'>Features</button>
            </div>
        </div>
    </div>
  )
}
