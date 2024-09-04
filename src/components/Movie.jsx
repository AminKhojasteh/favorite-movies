import useMoviesContext from "../context/moviesContext";
import MovieDetailsBox from "./MovieDetailsBox";

function Movie({ movie }) {
  const { movieId, setMovieId } = useMoviesContext();

  const isOpen = movie.imdbID === movieId;

  const handleClick = function () {
    setMovieId((s) => (s === movie.imdbID ? null : movie.imdbID));
  };

  return (
    <li
      className={`bg-slate-900 ${isOpen ? "h-[30rem]" : "h-28"} overflow-hidden rounded-lg transition-all duration-500`}
    >
      <div className="grid h-28 cursor-pointer grid-cols-[5rem_1fr_2rem] grid-rows-[4.5rem_1.5rem] items-center gap-x-2 p-2">
        <img src={movie.Poster} className="row-span-2 h-full" />
        <h3 className="text-md col-span-2 font-semibold text-slate-200">
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
      {isOpen && <MovieDetailsBox id={movie.imdbID} />}
    </li>
  );
}

export default Movie;
