import AnimeSearchBox from "@/components/AnimeSearchBox";
import AnimeCard from "@/components/AnimeCard";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a95b848a9mshedf83036bf5a527p13d53bjsn1d42d7ec6c6f',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};


export default async function MangaSearch({params}) {
    const searchParams = params.searchParams
    const url = `https://myanimelist.p.rapidapi.com/v2/anime/search?q=${searchParams}&n=50&score=8&genre=1`;
    const response = await fetch( url, options)
    const animes = await response.json() 
  return (
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
  )
}
