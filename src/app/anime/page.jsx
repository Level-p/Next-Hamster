import AnimeCard from "@/components/AnimeCard";
import AnimeSearchBox from "@/components/AnimeSearchBox";


export default async function Anime() {
  const url= 'https://anime-db.p.rapidapi.com/anime?page=1&size=30&sortOrder=asc'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.AS_API_KEY,
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };

  const res = await fetch(url,options)
  if(!res.ok) throw new Error ('Something went wrong, limit may be exhausted')
  const list = await res.json()
  const data = list.data
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
