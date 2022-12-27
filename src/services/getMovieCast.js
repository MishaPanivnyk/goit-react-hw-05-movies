import axios from 'axios';
export default async function getMovieCast(movieId) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=71fec8ada61fc1ccf513a6c7541f2b6d&language=en-US`
    );
    return data.cast.map(({ name, profile_path, character }) => ({
      name,
      profile_path,
      character,
    }));
  } catch (error) {
    console.error(error);
  }
}
