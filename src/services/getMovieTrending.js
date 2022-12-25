import axios from 'axios';

export default async function getMovieTrending() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=71fec8ada61fc1ccf513a6c7541f2b6d'
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
