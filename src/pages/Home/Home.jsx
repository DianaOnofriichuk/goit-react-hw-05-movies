import { getTrendingMovies } from '../../api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import { useState, useEffect } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    }

    fetchMovies();
  }, []);
  return (
    <div className="page-container">
      <GoBackBtn></GoBackBtn>
      <MoviesList movies={trendingMovies}></MoviesList>
    </div>
  );
};
export default Home;
