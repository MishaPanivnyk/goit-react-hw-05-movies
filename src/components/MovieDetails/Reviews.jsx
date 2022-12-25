import getMovieReviews from '../../services/getMovieReviews';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviwsHtml, setReviewsHtml] = useState('');
  const [reviewLength, setRewiewsLength] = useState(0);
  useEffect(() => {
    getMovieReviews(movieId).then(movieData => {
      setReviewsHtml(
        movieData.data.results.map(reviewEl => (
          <li key={reviewEl.id}>
            <h3>Author: {reviewEl.author}</h3>
            <p>'{reviewEl.content}'</p>
          </li>
        ))
      );
      setRewiewsLength(movieData.data.results.length);
    });
  }, [movieId]);
  return (
    <section>
      <h2>Reviews</h2>
      <ul>{reviewLength !== 0 ? reviwsHtml : 'No reviews for this movie'}</ul>
    </section>
  );
};
export default Reviews;
