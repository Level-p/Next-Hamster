import Image from 'next/image'

export default function About() {
  return (
    <div className='max-w-6xl mx-auto p-5 flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className="hidden lg:block w-3/4 h-3/4 overflow-hidden rounded-2xl">
        <Image src ='/img.webp'
        alt="About" 
        className="transition-transform duration-500 ease-in hover:scale-125 h-1/2" 
        layout="responsive" 
        objectFit="contain" 
        objectPosition="center" 
        height={100} 
        width={100}
        />
        </div>

        <div className='space-y-4'>
            <h1 className="text-2xl font-medium text-amber-600 dark:text-white">About</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nulla iure reiciendis hic ducimus ad, laudantium obcaecati sed dicta velit quae enim ab eaque amet! Accusantium debitis rerum accusamus quod.
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem earum tempore sint hic dolor fuga, esse laboriosam illo labore, distinctio ducimus dolorum eum autem voluptas quam aliquam tempora dolores corporis error consequatur debitis? Rem quaerat quibusdam iure id officia!
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis unde totam odio nemo similique quidem quaerat soluta earum fuga, autem alias quis itaque accusantium eos tempora voluptate adipisci consectetur aliquam sunt sit. Repellendus maxime mollitia unde? Deserunt totam ipsum explicabo.
            </p>
        </div>
    </div>
  )
}
