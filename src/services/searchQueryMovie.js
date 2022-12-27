import axios from 'axios';

export default async function searchQueryMovie({ query, page }) {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=71fec8ada61fc1ccf513a6c7541f2b6d&language=en-US&query=${query}&page=${page}&include_adult=true`
    );
    return results.map(({ title, id }) => ({ title, id }));
  } catch (error) {
    console.error(error);
  }
}
