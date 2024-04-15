import Results from "@/components/Results"
import Hero from "@/components/design/Hero";
import Intro from "@/components/design/Intro";
import Section from "@/components/design/showcase";

const API_KEY = process.env.MOVIE_API_KEY

const news = {
  method: 'GET',
  url: 'https://transfermarket.p.rapidapi.com/news/list-latest',
  params: {domain: 'com'},
  headers: {
    'X-RapidAPI-Key': process.env.AS_API_KEY,
    'X-RapidAPI-Host': 'transfermarket.p.rapidapi.com'
  }
};

const anime = {
  method: 'GET',
  url: 'https://myanimelist.p.rapidapi.com/anime/top/upcoming',
  headers: {
    'X-RapidAPI-Key': process.env.AS_API_KEY,
    'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
  }
};


export default async function page({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-Us&page=1?sort=asc`,
      {next: {revalidate: 3600}}
  )
  const data = await res.json()
  if(!res.ok) {
    throw new Error  ('Failed to fetch data')
  }

  const results = data.results
  // console.log(results);
  return (
    <div>
      <Hero/>
      <Results results={results}/>
      <Intro/>
      <Section/>
    </div>
  )
}
