import getMovieReviews from '../../services/getMovieReviews';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviwsHtml, setReviewsHtml] = useState('');
  const [reviewLength, setRewiewsLength] = useState(0);
  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviewsHtml(
        data.map(reviewEl => (
          <li key={reviewEl.id}>
            <h3>Author: {reviewEl.author}</h3>
            <p>'{reviewEl.content}'</p>
          </li>
        ))
      );
      setRewiewsLength(data.length);
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
