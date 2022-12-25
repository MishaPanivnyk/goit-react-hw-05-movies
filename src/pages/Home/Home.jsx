import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import getMovieTrending from 'services/getMovieTrending';
const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getMovieTrending().then(data => {
      setTrendingMovies(data.data.results);
    });
  }, []);
  return (
    <main>
      <h1>Trending today:</h1>
      <ul>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`} state={{ from: location }}>
              {trendingMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Home;
