import useMoviesContext from "../context/moviesContext";
import SearchedMovieDetailBox from "./SearchedMovieDetailBox";

function SearchedMovie({ movie }) {
  const { searchedMovieId, setSearchedMovieId } = useMoviesContext();

  const isOpen = movie.imdbID === searchedMovieId;

  const handleClick = function () {
    setSearchedMovieId((s) => (s === movie.imdbID ? null : movie.imdbID));
  };

  return (
    <li
      className={`bg-slate-900 ${isOpen ? "h-[32rem]" : "h-28"} flex flex-col overflow-hidden rounded-lg transition-all duration-500`}
    >
      <div className="grid h-28 cursor-pointer grid-cols-[5rem_1fr_2rem] grid-rows-[4.5rem_1.5rem] items-center gap-x-2 p-2">
        <img src={movie.Poster} className="row-span-2 h-full" />
        <h3 className="col-span-2 text-sm font-semibold text-slate-200">
          {movie.Title}
        </h3>
        <span className="text-xs text-slate-200">{`${movie.Year} - ${movie.Type}`}</span>
        <span
          onClick={handleClick}
          className="text-md justify-self-center text-slate-200"
        >
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && <SearchedMovieDetailBox id={movie.imdbID} />}
    </li>
  );
}

export default SearchedMovie;
