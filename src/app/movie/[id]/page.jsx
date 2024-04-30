import Image from 'next/image';

export default async function Moviepage({params}) {
  const movieId = params.id
  const apiKey = process.env.MOVIE_API_KEY
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
 
  const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const movie = await res.json();
  return (
    <div className='w-full p-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6 items-center'>
      <Image 
      src={`https://image.tmdb.org/t/p/original/${ movie.backdrop_path || movie.poster_path}`}
      width={500}
      height={300}
      alt=''
      style={{width:  'auto'}}
      className='rounded-lg'/>
      <div className='p-2'>
        <h2 className='text-lg font-bold mb-2'>Title: {movie.title || movie.name}</h2>
        <h3 className='text-base font-semibold flex gap-4'>Genres: {movie.genres.map(genre => (
          <span className='text-gray-800 dark:text-amber-600' key={genre.id}>{genre.name}</span>
        ))}</h3>
        <p className='text-lg mb-2 tracking-wide'>{movie.overview}</p>
        <p className='font-semibold mb-3 mr-1'>Date Released: <span className='text-gray-800 dark:text-amber-600'>
            {movie.release_date || movie.first_air_date}
          </span></p>
          <p className='font-semibold mb-3 mr-1'>Rating: <span className='text-gray-800 dark:text-amber-600'>
            {movie.vote_count}
          </span></p>
      </div>
    </div>
  )
}
