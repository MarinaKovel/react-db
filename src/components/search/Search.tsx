import React, { useState, useEffect, useRef } from 'react';

// <object, { search: string }>  useEffect + useRef + стейт
function Search() {
  const [searchInput, setSearchInput] = useState({
    search: localStorage.getItem('search') || '',
  });

  function handleChange(event: unknown) {
    setSearchInput({ search: ((event as Event).target as HTMLInputElement).value });
  }

  useEffect(() => {
    return () => localStorage.setItem('search', searchInput.search);
  }, [searchInput]);

  return (
    <form>
      <input
        type="search"
        value={searchInput.search}
        placeholder="Search"
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
