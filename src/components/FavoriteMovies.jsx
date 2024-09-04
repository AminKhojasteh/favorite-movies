import Header from "./Header";
import MovieBox from "./MovieBox";

function FavoriteMovies() {
  const testVar = 12;

  return (
    <div className="flex min-h-screen flex-col gap-2 bg-slate-950">
      <Header />
      <MovieBox />
    </div>
  );
}

export default FavoriteMovies;
