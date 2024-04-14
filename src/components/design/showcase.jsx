import Image from "next/image"

export default function showcase() {
  return (
    <section className="py-28 px-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between space-x-0 lg:space-x-20 space-y-8 lg:space-y-0 gap-3 roboto">
            <div className="hidden lg:block  h-[450px]  w-full mt-20 md:mt-0 object-contain">
                <div className="h-full w-full  bg-slate-200 relative rounded-[100%]">
                  <div className="absolute inset-0 ">
                    <Image 
                    height={300}
                    width={350}
                    alt="null"
                    className="rounded-xl h-full mx-auto"
                    objectFit="contain"
                    src='/disney.webp'/>
                  </div>
                </div>           
            </div>

          <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl tracking-wide font-extrabold">It has never been easier to watch free movies online.</h2>

          <p className="text-base leading-8">Once you register for a free account with Plex, we’ll keep your place from screen to screen as long as you’re signed in. No matter what device you choose, your free movies will pick up where you left off with ease.
          </p>

          <button className="custom-btn border-none bg-amber-600 w-1/2 object-contain">Learn more</button>
          </div>
        </div>
    </section>
  )
}
