import Image from 'next/image'

export default function loading() {
  return (
    <div className='flex justify-center mt-20'>
         <Image
            className='h-64'
            src="loading.svg"
            alt="Loading ..."
            width={200}
            height={200}
    />
    </div>
  )
}
