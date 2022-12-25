import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import searchQueryMovie from 'services/searchQueryMovie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';
  const [searchResult, setSearchResult] = useState('');

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
  useEffect(() => {
    if (movieQuery !== '') {
      searchQueryMovie({ query: movieQuery, page: 1 }).then(Movies => {
        setSearchResult(Movies.data.results);
      });
    }
    setSearchResult('');
  }, [movieQuery]);
  return (
    <main>
      <SearchBox
        value={inputValue}
        onChange={setInputValue}
        onClick={searchMovie}
      />
      <ToastContainer autoClose={2500} />
      <Suspense fallback={<div>Loading...</div>}>
        {searchResult !== '' ? (
          <MoviesList movies={searchResult} />
        ) : (
          <div>No movies...</div>
        )}
        <Outlet />
      </Suspense>
    </main>
  );
};
export default Movies;
