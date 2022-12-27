import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from '../../components/MoviesList/MoviesList';

import searchQueryMovie from 'services/searchQueryMovie';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieQuery !== '') {
      searchQueryMovie({ query: movieQuery, page: 1 }).then(data => {
        setSearchResult(data);
      });
    }
    setSearchResult('');
  }, [movieQuery]);

  const searchMovie = () => {
    if (inputValue === '') {
      return toast.info('Sorry, nothing was found for your search');
    }

    updateQueryString(inputValue);
    setInputValue('');
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox
        value={inputValue}
        onChange={setInputValue}
        onClick={searchMovie}
      />
      <ToastContainer autoClose={2500} />
      {searchResult.length > 0 ? (
        <MoviesList movies={searchResult} />
      ) : (
        <div>No movies...</div>
      )}
    </main>
  );
};
export default Movies;
