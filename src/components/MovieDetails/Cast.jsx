import getMovieCast from '../../services/getMovieCast';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cast = () => {
  const { movieId } = useParams();

  const [castHtml, setCastHtml] = useState('');
  const [castLength, setCastLength] = useState(0);

  useEffect(() => {
    getMovieCast(movieId).then(movieData => {
      setCastHtml(
        movieData.data.cast.map(castEl => (
          <li key={castEl.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${castEl.profile_path}`}
              alt={`Actor: ${castEl.name}`}
              onError={e => {
                e.target.src =
                  'https://via.placeholder.com/116x174/808080/000000?text=NO+PHOTO';
              }}
              width="10%"
            />
            <p>{castEl.name}</p>
            <p>Character: {castEl.character}</p>
          </li>
        ))
      );
      setCastLength(movieData.data.cast.length);
    });
  }, [movieId]);

  return (
    <section>
      <h2>Cast</h2>
      <ul>{castLength !== 0 ? castHtml : 'No cast info for this movie'}</ul>
    </section>
  );
};
export default Cast;
