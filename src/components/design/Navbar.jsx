"juse client"
import { Suspense } from "react";
import NavbarItem from "../NavbarItem";
import Pages from "../Pages";

export default function Navbar() {
  return (
    // <Suspense >
      <div className="flex dark:bg-slate-950 items-center justify-evenly md:justify-center gap-4 md:gap-12  bg-slate-100 dark:text-white p-4">
        <NavbarItem title="Trending" param="fetchTrending"/> 
        <NavbarItem title="Top Rated" param="fetchTopRated"/> 
        <Pages title="Anime" param="anime"/> 
        </div>
    // </Suspense>
  )
}
