import {
  Container,
  CardWrapper,
  ImageBlock,
  Header1,
} from './MovieInfo.styled';
import PropTypes from 'prop-types';

export const MovieInfo = ({ dataMovie, imageSrc, dataGenres, dataRelease }) => {
  return (
    <Container>
      <ImageBlock src={imageSrc} alt={`${dataMovie.title}`} />
      <CardWrapper>
        <Header1>{`${dataMovie.original_title} (${dataRelease})`}</Header1>
        <p>{`User score: ${(dataMovie.vote_average * 10).toFixed(2)}%`}</p>
        <h3>Overview</h3>
        <p>{`${dataMovie.overview}`}</p>
        <h4>Genres</h4>
        <p>{dataGenres}</p>
      </CardWrapper>
    </Container>
  );
};
MovieInfo.propTypes = {
  dataMovie: PropTypes.object,
  imageSrc: PropTypes.string,
  dataGenres: PropTypes.string,
  dataRelease: PropTypes.string,
};
