import { useState, useRef, useEffect, ChangeEvent } from 'react';

function Search() {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const inputRef = useRef(search);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    inputRef.current = search;
  }, [search]);

  useEffect(() => {
    return () => {
      localStorage.setItem('search', inputRef.current);
    };
  }, []);

  return (
    <form>
      <input
        type="search"
        value={search}
        ref={() => search}
        placeholder="Search"
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
