import Image from "next/image";
import { Suspense } from "react";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.AS_API_KEY,
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

export default async function page({params}) {
    const animeId = params.Id
    const url = `https://myanimelist.p.rapidapi.com/anime/${animeId}`;

    const response = await fetch(url, options)
    const anime = await response.json()
  return (
    // <Suspense>
    <section className="roboto max-w-5xl mx-auto min-h-screen">
       <div className='py-10 px-4 flex flex-col md:flex-row gap-4 items-center justify-center w-full '>
        <div className="overflow-hidden h-full">
        <Image 
        src={anime.picture_url}
        width={5000}
        height={1200}
        alt=''
        className='rounded-lg transition-transform duration-300 hover:scale-125 h-full'/>
        </div>
            <div className='p-2 space-y-2 h-full'>
                <h1 className='text-xl font-bold'>Title: {anime.title_ov || anime.title_dn}</h1>
                <h2 className="text-lg font-medium">Stream: <span className="text-amber-600">{anime.information.type[0].name}</span></h2>
                {anime.information.genre !=='None' ? <h3 className='text-base font-semibold flex gap-4'>Genres: {anime.information.genre.map(genre => (
                <span className='text-gray-800 dark:text-amber-600' key={genre.id}>{genre.name}</span>
                ))}</h3>: <h3 className='text-base font-semibold flex gap-4'>Genres: {anime.information.genres.map(genre => (
                    <span className='text-gray-800 dark:text-amber-600' key={genre.id}>{genre.name}</span>
                    ))}</h3>}

                <p className='text-lg mb-2 tracking-wide'>{anime.synopsis}</p>
                <div className='font-semibold flex gap-2'>Date: <span className='text-gray-800 dark:text-amber-600 flex gap-3 items-center'>
                    <h3>{anime.information.status}</h3>
                    <h3>{anime.information.aired}</h3>
                </span></div>
                <p className='font-semibold'>Rating: <span className='text-gray-800 dark:text-amber-600'>
                    {anime.statistics.ranked}
                </span></p>
                <h2 className="text-lg font-semibold">Premiered: {anime.information.premiered[0].name}</h2>
            </div>
        </div>
    </section>
    // </Suspense>
  )
}
