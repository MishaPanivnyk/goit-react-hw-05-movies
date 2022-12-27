import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, CardWrapper, MovieName, MovieLink } from './MoviesList.styled';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieName>{movie.title}</MovieName>
          </MovieLink>
        </CardWrapper>
      ))}
    </List>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
