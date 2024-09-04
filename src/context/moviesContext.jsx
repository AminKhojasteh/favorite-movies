import { createContext, useContext, useState } from "react";

const moviesContext = createContext();

const Provider = function ({ children }) {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  return (
    <moviesContext.Provider
      value={{ movies, setMovies, watchedMovies, setWatchedMovies }}
    >
      {children}
    </moviesContext.Provider>
  );
};

const useMoviesContext = function () {
  return useContext(moviesContext);
};

export { Provider };

export default useMoviesContext;
