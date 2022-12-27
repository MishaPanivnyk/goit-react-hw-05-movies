import {
  Container,
  CardWrapper,
  ImageBlock,
  Header1,
} from './MovieInfo.styled';
import PropTypes from 'prop-types';

export const MovieInfo = ({ dataMovie }) => {
  // setImageSrc();
  // setDataGenres();
  // setDataRelease();
  const { title, overview, poster_path, vote_average, genres, release_date } =
    dataMovie;
  const imageSrc = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const dataGenres =
    genres.length > 0
      ? genres.map(({ name }) => name).join(', ')
      : 'No information';
  const dataRelease = release_date.slice(0, 7);
  const voteAvarage = `${(vote_average * 10).toFixed(2)}%`;

  return (
    <Container>
      <ImageBlock src={imageSrc} alt={title} />
      <CardWrapper>
        <Header1>{`${title} (${dataRelease})`}</Header1>
        <p>{`User score: ${voteAvarage}`}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{dataGenres}</p>
      </CardWrapper>
    </Container>
  );
};
MovieInfo.propTypes = {
  dataMovie: PropTypes.object.isRequired,
};
