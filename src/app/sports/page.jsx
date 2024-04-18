import Slider from "@/components/Slider";
import Image from "next/image";

const club = async () => {
  const url= 'https://transfermarket.p.rapidapi.com/news/list-by-club?id=631&domain=com'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.AS_API_KEY,
      'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options)
  const data = await res.json()
  if(!res.ok) throw new Error ('Something went')
  return data.news
}

const latest = async () => {
  const url= 'https://transfermarket.p.rapidapi.com/news/list-latest?id=631&domain=com'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.AS_API_KEY,
      'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options)
  const data = await res.json()
  if(!res.ok) throw new Error ('Something went')
  return data.news
}

export default async function Sports() {
  const res1 =  await club()
  const res2 =  await latest()
  // console.log(res2);

  return (
  <div className="p-2">
    <section 
    className='roboto max-w-5xl py-10 mx-auto '>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-4 shadow-md dark:shadow dark:shadow-slate-300 w-full p-4 group">
          <div className="space-y-5">
            <h5 className="text-sm flex gap-3 items-center justify-end\"><span className="bg-amber-600 py-1 px-2 font-medium uppercase text-white text-base rounded-sm">Live</span> football</h5>
                <h3 className='text-2xl  tracking-wide font-light leading-10 capitalize'>Get the latest football news all around the world </h3>
            </div>
            <Image
            className="group-hover:opacity-95"
            src="/sports.jpg"
            height={400}
            width={500}
            alt=""
          />
      </div>
        
       
    </section>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-5xl mt-10 mx-auto gap-4">
    {
          res1.map((news) => (
            <Slider key={news.id} news={news}/>
          ))
    }
    </section>
  </div>
  )
}
