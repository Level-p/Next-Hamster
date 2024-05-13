import AnimeSearchBox from "@/components/AnimeSearchBox";
import AnimeCard from "@/components/AnimeCard";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.AS_API_KEY,
		// 'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};


export default async function MangaSearch({params}) {
    const searchParams = params.searchParams
    // const url = `https://myanimelist.p.rapidapi.com/v2/anime/search?q=${searchParams}&n=50&score=8&genre=1`;
    const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${searchParams}=asc`;
    const response = await fetch( url, options)
    const animes = await response.json() 
    console.log(animes);
  return (
    <div>
    <AnimeSearchBox/>
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto  py-4 w-full gap-4'>
      {
          animes.data.map((anime, index) => (
            <AnimeCard key={index} anime={anime}/>
          ))
    }
    </div>
  </div>  
  )
}
