import axios from 'axios';

export default async function getMovieTrending() {
  try {
    const {
      data: { results },
    } = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=71fec8ada61fc1ccf513a6c7541f2b6d'
    );
    return results.map(({ title, id }) => ({ title, id }));
  } catch (error) {
    console.error(error);
  }
}
