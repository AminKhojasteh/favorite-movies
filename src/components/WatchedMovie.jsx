import useMoviesContext from "../context/moviesContext";
import WatchedMovieDetailBox from "./WatchedMovieDetailBox";

function WatchedMovie({ movieData }) {
  const { watchedMovieId, setWatchedMovieId, setWatchedMoviesList } =
    useMoviesContext();

  const isOpen = movieData.imdbID === watchedMovieId;

  const handleSaveClick = function () {
    setWatchedMovieId((s) =>
      s === movieData.imdbID ? null : movieData.imdbID,
    );
  };

  const handleDeleteClick = function () {
    setWatchedMoviesList((s) =>
      s.filter((movie) => movie.imdbID !== movieData.imdbID),
    );
  };

  return (
    <li
      className={`bg-slate-900 ${isOpen ? "h-[32rem]" : "h-28"} flex flex-col overflow-hidden rounded-lg transition-all duration-500`}
    >
      <div className="grid h-28 cursor-pointer grid-cols-[5rem_1fr_2rem_5rem] grid-rows-[4.5rem_1.5rem] items-center gap-x-2 p-2">
        <img
          src={movieData.Poster}
          alt={`${movieData.Title} Poster`}
          className="row-span-2 h-full"
        />
        <h3 className="col-span-3 text-sm font-semibold text-slate-200">
          {movieData.Title}
        </h3>
        <span className="text-xs text-slate-200">{`${movieData.Year} - ${movieData.Type}`}</span>
        <span
          onClick={handleSaveClick}
          className="text-md justify-self-center text-slate-200"
        >
          {isOpen ? "-" : "+"}
        </span>
        <button
          onClick={handleDeleteClick}
          className="justify-self-center rounded-md bg-red-500 px-2 py-0.5 text-[0.675rem] font-semibold text-slate-950"
        >
          Delete
        </button>
      </div>
      {isOpen && <WatchedMovieDetailBox id={movieData.imdbID} />}
    </li>
  );
}

export default WatchedMovie;
