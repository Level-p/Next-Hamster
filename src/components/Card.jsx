import Image from "next/image"
import Link from "next/link"
import {FiThumbsUp} from "react-icons/fi"

export default function Card({result}) {
  return (
    <div className="group sm:hover:shadow-slate-300 sm:shadow-lg dark:sm:border dark:sm:border-gray-600 rounded-lg p-3  sm:m-2 transition-shadow duration-200">
        <Link href={`/movie/${result.id}`}>
            <Image
            src={`https://image.tmdb.org/t/p/original/${
                result.backdrop_path || result.poster_path}`}
            alt=""
            height={300}
            width={500}
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-200" />
            <div className="space-y-3">
                <p className="line-clamp-2 text-md">{result.overview}</p>
                <h2 className="text-lg font-bold truncate">{result.title || result.name}</h2>
                <p className="flex items-center">
                     {result.release_date || result.first_air_date}
                     <FiThumbsUp className="h-5 mr-1 ml-3"/>
                     <span className="text-amber-600">{result.vote_count}</span>
                </p>
            </div>
        </Link>
    </div>
  )
}
