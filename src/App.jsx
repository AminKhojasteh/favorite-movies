import FavoriteMovies from "./components/FavoriteMovies";
import { Provider } from "./context/moviesContext";

function App() {
  return (
    <Provider>
      <div>
        <FavoriteMovies />
      </div>
    </Provider>
  );
}

export default App;
