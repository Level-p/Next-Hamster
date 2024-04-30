import AnimeCard from "@/components/AnimeCard";
import AnimeSearchBox from "@/components/AnimeSearchBox";


export default async function Anime() {
  const anime = {
    method: 'GET',
    url: 'https://myanimelist.p.rapidapi.com/anime/top/all',
    headers: {
      'X-RapidAPI-Key': process.env.AS_API_KEY,
      'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
    }
  };

  const res = await fetch(anime)
  // if(!res.ok) throw new Error ('Something went wrong, limit may be exhausted')
  const data = await res.json()
  return (
  <div>
    <AnimeSearchBox/>
    <div className='sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mt-10 mx-auto gap-4'>
      {
          data.map((anime, index) => (
            <AnimeCard key={index} anime={anime}/>
          ))
    }
    </div>
  </div>  
  )
}
