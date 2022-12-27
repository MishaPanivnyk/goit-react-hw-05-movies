import { lazy, Suspense, useState, useEffect } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';

import { MovieInfo } from 'components/MovieDetails/MovieInfo';
import getMovieById from '../../services/getMovieById';

const BackLink = lazy(() => import('../../components/BackLink/BackLink'));

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const BackLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId).then(movieData => {
      setDataMovie(movieData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <main>
      <BackLink to={BackLinkHref}>Go back</BackLink>
      {dataMovie && <MovieInfo dataMovie={dataMovie} />}

      <Suspense fallback={<div>Loading...</div>}>
        <p>Additional info:</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: BackLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: BackLink }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
