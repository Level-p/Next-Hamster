import Results from '@/components/Results';
import React from 'react'

export default async function SearchPage({params}) {
    const searchTerm = params.searchTerm
    const apiKey = process.env.MOVIE_API_KEY
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=1&include_adult=true`;

    const res = await fetch(url)
    const data = await res.json()
    const results = data.results
  return <div>
        {results && results.length === 0 && (
      <h1 className='text-center pt-6'>No results found</h1>
    )}
       {
        results && <Results results={results}/>
       }
    </div>
  
}
