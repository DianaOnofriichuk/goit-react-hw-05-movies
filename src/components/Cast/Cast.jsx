import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../api/api';
import './Cast.css';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    async function receiveCast() {
      const result = await getCast(movieId);
      setCast(result);
    }
    receiveCast();
  }, [movieId]);

  if (cast && cast.length > 0) {
    return (
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                className="actor-photo"
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={actor.original_name}
              />
              <p className="actor-text">{actor.original_name}</p>
              <p className="actor-text">Character {actor.character}</p>
            </li>
          );
        })}
      </ul>
    );
  }
  return <p>We don't have any information about cast for this movie</p>;
};
export default Cast;
