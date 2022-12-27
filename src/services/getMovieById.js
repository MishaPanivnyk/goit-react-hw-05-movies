import axios from 'axios';
export default async function getMovieById(movieId) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=71fec8ada61fc1ccf513a6c7541f2b6d&language=en-US`
    );
    const { title, overview, poster_path, vote_average, genres, release_date } =
      data;
    return {
      vote_average,
      title,
      release_date,
      overview,
      poster_path,
      genres,
    };
  } catch (error) {
    console.error(error);
  }
}
