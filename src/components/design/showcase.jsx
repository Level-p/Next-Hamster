import Image from "next/image"
import { AiOutlineAmazon } from "react-icons/ai"
import { BsApple, BsWindows } from "react-icons/bs"
import { FiChrome } from "react-icons/fi"
import { MdAndroid } from "react-icons/md"

export default function showcase() {
  return (
    <section className=" px-10 roboto space-y-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between space-x-0 lg:space-x-20 space-y-8 lg:space-y-0 gap-3 roboto md:pb-40 pb-0">
            <div className="hidden lg:block  h-[450px]  w-full mt-20 md:mt-0 object-contain">
                <div className="h-full w-full  bg-slate-200 relative rounded-[100%]">
                  <div className="absolute inset-0 ">
                    <Image 
                    height={300}
                    width={350}
                    style={{maxWidth: 'auto'}}
                    alt="null"
                    className="rounded-xl h-full mx-auto"
                    src='/disney.webp'/>
                  </div>
                </div>           
            </div>

          <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl tracking-wide font-extrabold">It has never been easier to watch free movies online.</h2>

          <p className="text-base leading-8">Once you register for a free account with Plex, we’ll keep your place from screen to screen as long as you’re signed in. No matter what device you choose, your free movies will pick up where you left off with ease.
          </p>

          <button className="custom-btn border-none bg-amber-600 w-1/2 object-contain">Learn more</button>
          </div>
        </div>

        {/* Intro 2 */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-between space-x-0 lg:space-x-20 space-y-8 lg:space-y-0 gap-4 roboto pb-32">
            <div className="hidden lg:block  h-[450px]  w-full mt-20 md:mt-0">
                    <Image 
                    height={1200}
                    width={600}
                    alt="null"
                    className="rounded-xl h-full w-full"
                    // src='/intro2.jpg'/>        
                    src={'https://images.unsplash.com/photo-1572188863110-46d457c9234d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWUlMjBwb3N0ZXJzfGVufDB8fDB8fHww'} />
            </div>

          <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl tracking-wide font-extrabold">We’re compatible.</h2>

          <p className="text-base leading-8">Stream Plex from just about any phone, tablet, smart TV, gaming consoles, or PC
          </p>

          <div className="flex gap-6 text-4xl">
            <BsApple/>
            <FiChrome/>
            <MdAndroid/>
            <BsWindows/>
            <AiOutlineAmazon/>
          </div>

          <button className="custom-btn block border-none bg-amber-600 object-contain w-2/3 text-xl">Stream now</button>
          </div>
      </div>
    </section>
  )
}
