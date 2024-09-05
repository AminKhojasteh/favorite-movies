import { useState } from "react";
import StarRating from "./StarRating";
import useMoviesContext from "../context/moviesContext";

function WatchedMovieDetails({ movieData }) {
  const { watchedMoviesList, setWatchedMoviesList } = useMoviesContext();
  const [rating, setRating] = useState(
    watchedMoviesList.find((movie) => movie.imdbID === movieData.imdbID)
      .userRating,
  );

  const handleClick = function () {
    setWatchedMoviesList((s) =>
      s.map((movie) =>
        movie.imdbID !== movieData.imdbID
          ? movie
          : { ...movie, userRating: rating },
      ),
    );
  };

  return (
    <div className="grid h-full grid-cols-2 grid-rows-[repeat(6,min-content)_1fr_min-content_3rem] items-start gap-1 p-2 text-slate-200">
      <div className="flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">Genre:</h6>
        <span className="text-[0.625rem]">{movieData.Genre}</span>
      </div>
      <div className="flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">
          Country:
        </h6>
        <span className="text-[0.625rem]">{movieData.Country}</span>
      </div>
      <div className="flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">
          Language:
        </h6>
        <span className="text-[0.625rem]">{movieData.Language}</span>
      </div>
      <div className="flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">
          Released:
        </h6>
        <span className="text-[0.625rem]">
          {movieData.Released === "N/A" ? "-" : movieData.Released}
        </span>
      </div>
      <div className="flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">
          Director:
        </h6>
        <span className="text-[0.625rem]">{movieData.Director}</span>
      </div>
      <div className="flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">
          Actors:
        </h6>
        <span className="text-[0.625rem]">{movieData.Actors}</span>
      </div>
      <div className="flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">
          BoxOffice :
        </h6>
        <span className="text-[0.625rem]">
          {movieData.BoxOffice === "N/A" ? "-" : movieData.BoxOffice}
        </span>
      </div>
      <div className="flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">
          Awards:
        </h6>
        <span className="text-[0.625rem]">
          {movieData.Awards === "N/A" ? "-" : movieData.Awards}
        </span>
      </div>
      <div className="flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">
          Ratings:
        </h6>
        {movieData.Ratings.length > 0 ? (
          <span className="text-[0.625rem]">{`${movieData.Ratings[0].Source}: ${movieData.Ratings[0].Value}`}</span>
        ) : (
          ""
        )}
        {movieData.Ratings.length > 1 ? (
          <span className="text-[0.625rem]">{`${movieData.Ratings[1].Source}: ${movieData.Ratings[1].Value}`}</span>
        ) : (
          ""
        )}
        {movieData.Ratings.length > 2 ? (
          <span className="text-[0.625rem]">{`${movieData.Ratings[2].Source}: ${movieData.Ratings[2].Value}`}</span>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">
          Runtime:
        </h6>
        <span className="text-[0.625rem]">
          {movieData.Runtime === "N/A" ? "-" : movieData.Runtime}
        </span>
      </div>
      <div className="col-span-2 flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">Plot:</h6>
        <span className="text-[0.625rem]">
          {movieData.Plot === "N/A" ? "-" : movieData.Plot}
        </span>
      </div>
      <StarRating
        maxRating={10}
        size={2}
        onSetRating={setRating}
        defaultRating={rating}
        extraStyle={{
          gridColumn: "span 2",
          justifySelf: "center",
          alignSelf: "center",
          gridRowStart: "8",
        }}
      />
      <button
        onClick={handleClick}
        className="col-span-2 row-start-9 self-center justify-self-center rounded-md bg-yellow-500 px-4 py-2 text-[0.625rem] text-slate-800 active:scale-[0.98]"
      >
        Save rating
      </button>
    </div>
  );
}

export default WatchedMovieDetails;
