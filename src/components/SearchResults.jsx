import useMoviesContext from "../context/moviesContext";
import Movie from "./Movie";

function SearchResults() {
  const { movies } = useMoviesContext();

  return (
    <ul className="flex h-full flex-col gap-2 px-4 py-4">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default SearchResults;
