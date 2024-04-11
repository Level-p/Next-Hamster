import Hero from "@/components/Hero"
import Results from "@/components/Results"

const API_KEY = process.env.MOVIE_API_KEY

export default async function page({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-Us&page=1`
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
    </div>
  )
}
