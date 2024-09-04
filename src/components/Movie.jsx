function Movie({ movie }) {
  return (
    <div className="grid h-28 grid-cols-[5rem_1fr] grid-rows-2 items-center gap-x-5 rounded-lg bg-slate-900 p-2">
      <img src={movie.Poster} className="row-span-2 h-full" />
      <h3 className="text-xl font-semibold text-slate-200">{movie.Title}</h3>
      <span className="text-slate-200">{`${movie.Year} - ${movie.Type}`}</span>
    </div>
  );
}

export default Movie;
