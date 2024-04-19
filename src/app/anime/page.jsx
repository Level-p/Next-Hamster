import AnimeCard from "@/components/AnimeCard";
import AnimeSearchBox from "@/components/AnimeSearchBox";
import { Suspense } from "react";

const getAnmie = async () => {
  const anime = {
    method: 'GET',
    url: 'https://myanimelist.p.rapidapi.com/anime/top/all',
    headers: {
      'X-RapidAPI-Key': process.env.AS_API_KEY,
      'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
    }
  };

  const res = await fetch(anime)
  const data = await res.json()
  if(!res.ok) throw new Error ('Something went')
  return data
  
}


export default async function Anime() {
  const animes = await getAnmie()
  return (
    <Suspense>
  <div>
    <AnimeSearchBox/>
    <div className='sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mt-10 mx-auto gap-4'>
      {
          animes.map((anime, index) => (
            <AnimeCard key={index} anime={anime}/>
          ))
    }
    </div>
  </div>  
  </Suspense>
  )
}
