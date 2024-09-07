import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const moviesContext = createContext();

const Provider = function ({ children }) {
  const [searchedMoviesList, setSearchedMoviesList] = useState([]);
  const [watchedMoviesList, setWatchedMoviesList] = useLocalStorageState("watchedMovies", [])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSearchedMovies, setShowSearchedMovies] = useState(true);
  const [searchedMovieId, setSearchedMovieId] = useState(null);
  const [watchedMovieId, setWatchedMovieId] = useState(null);

  const sharedValues = {
    searchedMoviesList,
    setSearchedMoviesList,
    watchedMoviesList,
    setWatchedMoviesList,
    isLoading,
    setIsLoading,
    error,
    setError,
    showSearchedMovies,
    setShowSearchedMovies,
    searchedMovieId,
    setSearchedMovieId,
    watchedMovieId,
    setWatchedMovieId,
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
