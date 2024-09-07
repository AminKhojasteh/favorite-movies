import useMoviesContext from "../context/moviesContext";
import Loader from "./Loader";
import Error from "./Error";
import SearchedMovies from "./SearchedMovies";
import WatchedMovies from "./WatchedMovies";
// import { useEffect } from "react";

function MovieBox() {
  const {
    showSearchedMovies,
    setShowSearchedMovies,
    setSearchedMovieId,
    setWatchedMovieId,
  } = useMoviesContext();
  const { isLoading } = useMoviesContext();
  const { error } = useMoviesContext();

  const handleSearchTabClick = function () {
    setShowSearchedMovies(true);
    setSearchedMovieId(null);
    setWatchedMovieId(null);
  };

  const handleWatchedTabClick = function () {
    setShowSearchedMovies(false);
    setSearchedMovieId(null);
    setWatchedMovieId(null);
  };

  return (
    <main className="flex grow flex-col px-2">
      <div className="grid grid-cols-[10rem_1fr_10rem]">
        <button
          onClick={handleSearchTabClick}
          className={`w-full rounded-t-2xl px-4 py-2 text-yellow-500 transition-all duration-300 ${showSearchedMovies ? "bg-slate-800 font-bold" : "translate-y-1 scale-90 bg-slate-900"}`}
        >
          Search Results
        </button>
        <div className="">sfsdf</div>
        <button
          onClick={handleWatchedTabClick}
          className={`w-full rounded-t-2xl px-4 py-2 text-yellow-500 transition-all duration-300 ${showSearchedMovies ? "translate-y-1 scale-90 bg-slate-900" : "bg-slate-800 font-bold"}`}
        >
          Watched Movies
        </button>
      </div>
      <div className="relative z-10 grow bg-slate-800">
        {showSearchedMovies && error !== "" && <Error>{error}</Error>}
        {showSearchedMovies && error === "" && isLoading && <Loader />}
        {showSearchedMovies && error === "" && !isLoading && <SearchedMovies />}
        {!showSearchedMovies && <WatchedMovies />}
      </div>
    </main>
  );
}

export default MovieBox;
