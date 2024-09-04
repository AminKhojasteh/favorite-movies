import { useEffect, useState } from "react";
import useMoviesContext from "../context/moviesContext";

const KEY = "36be1ae7";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const { setMovies } = useMoviesContext();

  useEffect(
    function () {
      if (searchTerm !== "") {
        fetch(
          `https://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${searchTerm}&page=1`,
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            data.Response === "False" ? setMovies([]) : setMovies(data.Search);
          });
      }
    },
    [searchTerm, setMovies],
  );

  return (
    <form className="grid grid-cols-[1fr_4rem] bg-slate-800 px-8 py-5">
      <input
        type="text"
        placeholder="search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-md h-10 w-80 justify-self-start rounded-md bg-yellow-500 px-3 text-slate-800 placeholder-slate-500 outline-none transition-all duration-300 focus:scale-105"
      />
      <img src="./imdb.svg" alt="logo" className="w-10 justify-self-end" />
    </form>
  );
}

export default Header;
