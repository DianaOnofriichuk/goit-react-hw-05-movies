import './MoviesList.css';
import { Link, useLocation } from 'react-router-dom';
const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className="movies-item"
            >
              {movie.title} {movie.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MoviesList;
