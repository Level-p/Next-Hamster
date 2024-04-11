'use client'
import { ThemeProvider } from 'next-themes'

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className='text-gray-800 dark:text-gray-50 dark:bg-slate-900 min-h-screen select-none transition-all duration-200'>
            {children}
        </div>
    </ThemeProvider>
  )
}
