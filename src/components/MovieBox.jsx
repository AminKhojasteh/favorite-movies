import { useState } from "react";
import SearchResults from "./SearchResults";
import useMoviesContext from "../context/moviesContext";
import Loader from "./Loader";
import Error from "./Error";

function MovieBox() {
  const [showResults, setShowResults] = useState(true);
  const { isLoading } = useMoviesContext();
  const { error } = useMoviesContext();

  return (
    <main className="flex grow flex-col px-2">
      <div className="grid grid-cols-[10rem_1fr_10rem]">
        <button
          onClick={() => setShowResults(true)}
          className={`w-full rounded-t-2xl px-4 py-2 text-yellow-500 transition-all duration-300 ${showResults ? "bg-slate-800 font-bold" : "translate-y-1 scale-90 bg-slate-900"}`}
        >
          Search Results
        </button>
        <div className="">sfsdf</div>
        <button
          onClick={() => setShowResults(false)}
          className={`w-full rounded-t-2xl px-4 py-2 text-yellow-500 transition-all duration-300 ${showResults ? "translate-y-1 scale-90 bg-slate-900" : "bg-slate-800 font-bold"}`}
        >
          My Favorites
        </button>
      </div>
      <div className="relative z-10 grow bg-slate-800">
        {showResults && error !== "" && <Error>{error}</Error>}
        {showResults && error === "" && isLoading && <Loader />}
        {showResults && error === "" && !isLoading && <SearchResults />}
      </div>
    </main>
  );
}

export default MovieBox;
