import axios from 'axios';
export default async function getMovieById(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=71fec8ada61fc1ccf513a6c7541f2b6d&language=en-US`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
