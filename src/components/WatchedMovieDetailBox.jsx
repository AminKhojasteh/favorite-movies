import { useEffect, useState } from "react";
import Error from "./Error";
import Loader from "./Loader";
import WatchedMovieDetails from "./WatchedMovieDetails";

const KEY = "36be1ae7";

function WatchedMovieDetailBox({ id }) {
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
            `https://www.omdbapi.com/?apikey=${KEY}&i=${id}`,
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
        <WatchedMovieDetails movieData={movieData} />
      )}
    </div>
  );
}

export default WatchedMovieDetailBox;
