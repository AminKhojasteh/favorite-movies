import StarRating from "./StarRating";

function MovieDetails({ movieData }) {
  console.log(movieData.Ratings);

  return (
    <div className="grid grid-cols-2 items-start gap-1 p-2 text-slate-200">
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
        <span className="text-[0.625rem]">{movieData.Released}</span>
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
        <span className="text-[0.625rem]">{movieData.BoxOffice}</span>
      </div>
      <div className="flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">
          Awards:
        </h6>
        <span className="text-[0.625rem]">{movieData.Awards}</span>
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
        <span className="text-[0.625rem]">{movieData.Runtime}</span>
      </div>
      <div className="col-span-2 flex flex-col">
        <h6 className="text-[0.625rem] font-semibold text-slate-500">Plot:</h6>
        <span className="text-[0.625rem]">{movieData.Plot}</span>
      </div>
      <StarRating
        maxRating={10}
        size={2}
        extraStyle={{
          gridColumn: "span 2",
          justifySelf: "center",
          padding: "1.5rem 0",
        }}
      />
    </div>
  );
}

export default MovieDetails;
