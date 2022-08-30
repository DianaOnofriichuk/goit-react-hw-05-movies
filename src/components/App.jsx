import Loader from './Loader/Loader';
import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <nav className="navidation">
        <NavLink to="/" className=" nav-link" activeclassname="active">
          Home
        </NavLink>
        <NavLink to="/movies" className=" nav-link" activeclassname="active">
          Movies
        </NavLink>
      </nav>

      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
