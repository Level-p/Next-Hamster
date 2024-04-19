import Image from "next/image";
import Link from "next/link";

export default function AnimeCard({anime}) {
  return (
    <div className='group sm:hover:shadow-slate-300 sm:shadow-lg dark:sm:border dark:sm:border-gray-600 rounded-lg p-3 transition-shadow duration-200 roboto'>
              <Link href={`/anime/${anime.myanimelist_id}`}>
                <Image
                src={anime.picture_url || anime.myanimelist_url}
                alt=''
                height={300}
                width={500}
                className='rounded-t-lg group-hover:opacity-75 transition-opacity duration-200'
                />
                <div className="p-3">
                  <h3 className="font-bold text-base mb-3 mt-2 truncate"> {anime.title}</h3>
                  {anime.description ? <p className="line-clamp-2">{anime.description}</p> : ''}
                  {anime.rank ?<span className="tracking-wide">Rank: {anime.rank}</span>: ''}
                </div>
              </Link>
    </div>
  )
}
