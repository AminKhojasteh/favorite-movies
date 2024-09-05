import useMoviesContext from "../context/moviesContext";
import WatchedMovie from "./WatchedMovie";

function WatchedMovies() {
  const { watchedMoviesList } = useMoviesContext();

  return (
    <ul className="flex h-full flex-col gap-2 p-2">
      {watchedMoviesList.map((movie) => (
        <WatchedMovie movieData={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WatchedMovies;
