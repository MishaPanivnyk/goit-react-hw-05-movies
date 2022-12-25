import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container,
  CardWrapper,
  MovieName,
  MovieLink,
} from './MoviesList.styled';
export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MovieName>
              {movie.title} - ({movie.release_date})
            </MovieName>
          </MovieLink>
        </CardWrapper>
      ))}
    </Container>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
};
