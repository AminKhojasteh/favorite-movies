import { useEffect, useState } from "react";
import Error from "./Error";
import Loader from "./Loader";
import SearchedMovieDetails from "./SearchedMovieDetails";

const KEY = "36be1ae7";

function SearchedMovieDetailBox({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movieData, setMovieData] = useState("");

  useEffect(
    function () {
      async function fetchMovieDetails() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&plot=short&i=${id}`,
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovieData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovieDetails();
    },
    [id],
  );

  return (
    <div className="grow">
      {error !== "" && <Error>{error}</Error>}
      {error === "" && isLoading && <Loader />}
      {error === "" && !isLoading && movieData !== "" && (
        <SearchedMovieDetails movieData={movieData} />
      )}
    </div>
  );
}

export default SearchedMovieDetailBox;
