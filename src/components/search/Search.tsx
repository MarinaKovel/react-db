import { useState, useRef, useEffect, ChangeEvent, FormEvent } from 'react';
import { API } from '../../api/api';
import { TMovies, TDoSearch } from '../../types';

function Search(props: TDoSearch) {
  const [inputValue, setInputValue] = useState(localStorage.getItem('search') || '');
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(inputValue);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchValue(inputValue);
  }

  useEffect(() => {
    inputRef.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    return () => localStorage.setItem('search', inputRef.current);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (inputValue) {
        API.search(inputValue).then((data: void | TMovies) => {
          if (data && data.results) {
            props.doSearch(data);
          }
        });
      } else {
        API.getMovies().then((data: void | TMovies) => {
          if (data && data.results) {
            props.doSearch(data);
          }
        });
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={inputValue}
        ref={() => inputValue}
        placeholder="Search"
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
