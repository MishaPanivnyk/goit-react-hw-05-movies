import axios from 'axios';
export default async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=71fec8ada61fc1ccf513a6c7541f2b6d&language=en-US&page=1`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
