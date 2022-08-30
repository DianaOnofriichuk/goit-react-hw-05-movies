import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/api';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './MovieDetailsPage.css';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const MovieDetailsPage = () => {
  const [detalis, setDetalis] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    async function getDetalis() {
      const result = await getMovieDetails(movieId);
      setDetalis(result);
    }
    getDetalis();
  }, [movieId]);

  return (
    <div className="page-container">
      <GoBackBtn />
      {detalis.id ? (
        <div className="detalis-container">
          <img
            src={`https://image.tmdb.org/t/p/w300${detalis.backdrop_path}`}
            alt={detalis.original_title}
          />

          <div className="detalis-text-container">
            <p className="detalis-name">{detalis.title}</p>
            <ul className="detalis-list list">
              <li className="detalis-item">
                <p className="detalis-info-name">Vote / Votes </p>
                <p className="detalis-value-rating">{detalis.vote_average}</p>
                <p className="detalis-info-value">/ {detalis.vote_count}</p>
              </li>
              <li className="detalis-item">
                <p className="detalis-info-name">Popularity </p>{' '}
                <p className="detalis-info-value">{detalis.popularity}</p>
              </li>
              <li className="detalis-item">
                <p className="detalis-info-name">Original Title </p>
                <p className="detalis-info-value">{detalis.original_title}</p>
              </li>
              <li className="detalis-item"></li>
            </ul>
            <p className="detalis-about">About</p>
            <p className="detalis-description">{detalis.overview}</p>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast"> Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      ) : (
        <p>We don't have detailed information about this movie</p>
      )}
    </div>
  );
};
export default MovieDetailsPage;
