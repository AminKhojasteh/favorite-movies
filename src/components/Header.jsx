import { useEffect, useState } from "react";
import useMoviesContext from "../context/moviesContext";

const KEY = "36be1ae7";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const { setSearchedMoviesList } = useMoviesContext();
  const { setIsLoading } = useMoviesContext();
  const { setError } = useMoviesContext();
  const { setShowSearchedMovies } = useMoviesContext();

  const handlInputChange = function (e) {
    const userInput = e.target.value;
    setSearchTerm(userInput);
  };

  useEffect(
    function () {
      // const controller = new AbortController();

      async function fetchMovies() {
        try {
          setError("");
          setIsLoading(true);
          setShowSearchedMovies(true);
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${searchTerm}&page=1`,
          );
          // const res = await fetch(
          //   `https://www.omdbapi.com/?apikey=${KEY}&s=${searchTerm}&page=1`,
          //   { signal: controller.signal },
          // );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();
          // console.log(data);
          if (data.Response === "False") throw new Error("Movie not found");
          setSearchedMoviesList(data.Search);
        } catch (err) {
          // if (err.name !== "AbortError") setError(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (searchTerm.length < 3) {
        setError("");
        setIsLoading(false);
        setSearchedMoviesList([]);
        return;
      }

      const delayFetch = setTimeout(() => {
        fetchMovies();
      }, 2000);
      return () => clearTimeout(delayFetch);

      // fetchMovies();
      // return function () {
      //   controller.abort();
      // };
    },
    [
      searchTerm,
      setSearchedMoviesList,
      setIsLoading,
      setError,
      setShowSearchedMovies,
    ],
  );

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-[1fr_max-content] gap-x-5 bg-slate-800 px-5 py-5"
    >
      <input
        type="text"
        placeholder="search movies..."
        value={searchTerm}
        onChange={handlInputChange}
        className="text-md h-10 w-full justify-self-start rounded-md bg-yellow-500 px-3 text-slate-800 placeholder-slate-500 outline-none transition-all duration-300 focus:scale-105 sm:w-96 sm:focus:scale-100"
      />
      <img src="./imdb.svg" alt="logo" className="w-10 justify-self-end" />
    </form>
  );
}

export default Header;
