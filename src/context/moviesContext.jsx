import { createContext, useContext, useState } from "react";

const moviesContext = createContext();

const Provider = function ({ children }) {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movieId, setMovieId] = useState(null);

  const sharedValues = {
    movies,
    setMovies,
    watchedMovies,
    setWatchedMovies,
    isLoading,
    setIsLoading,
    error,
    setError,
    movieId,
    setMovieId,
  };

  return (
    <moviesContext.Provider value={sharedValues}>
      {children}
    </moviesContext.Provider>
  );
};

const useMoviesContext = function () {
  return useContext(moviesContext);
};

export { Provider };

export default useMoviesContext;
