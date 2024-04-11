import Link from 'next/link'

export default function MenuItem({ title, address, Icon}) {
  return (
    <Link href={address} className='hover:text-amber-600'>
        <Icon className="text-2xl transition-colors duration-200 hover:text-amber-600 sm:hidden"/>
        <p className='capitalize hidden sm:inline text-lg font-normal'>{title}</p>
    </Link>
  )
}
