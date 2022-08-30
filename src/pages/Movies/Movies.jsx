import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import { searchMovie } from '../../api/api';
import { useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = async value => {
    const result = await searchMovie(value);
    setMovies(result);
    setStatus('');
  };

  return (
    <div className="page-container">
      <GoBackBtn></GoBackBtn>
      <SearchForm onSubmit={onSubmit}></SearchForm>

      {status !== 'idle' && movies.length > 0 && (
        <MoviesList movies={movies}></MoviesList>
      )}

      {status !== 'idle' && movies.length === 0 && (
        <p>We don't find any movies for this request</p>
      )}
    </div>
  );
};

export default Movies;
