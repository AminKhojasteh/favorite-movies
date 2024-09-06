import useMoviesContext from "../context/moviesContext";
import SearchedMovie from "./SearchedMovie";

function SearchedMovies() {
  const { searchedMoviesList } = useMoviesContext();

  return (
    <ul className="flex h-full flex-col gap-2 p-2">
      {searchedMoviesList.map((movie) => (
        <SearchedMovie movieData={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default SearchedMovies;
