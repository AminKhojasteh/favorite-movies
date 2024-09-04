function Movie({ movie }) {
  return (
    <div className="grid h-28 grid-cols-[5rem_1fr] grid-rows-[4.5rem_1.5rem] items-center gap-x-2 rounded-lg bg-slate-900 p-2">
      <img src={movie.Poster} className="row-span-2 h-full" />
      <h3 className="text-lg font-semibold text-slate-200">{movie.Title}</h3>
      <span className="text-sm text-slate-200">{`${movie.Year} - ${movie.Type}`}</span>
    </div>
  );
}

export default Movie;
