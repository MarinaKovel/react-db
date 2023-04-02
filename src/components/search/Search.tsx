import React, { useState } from 'react';

function Search() {
  const [search, setSearch] = useState(localStorage.getItem('search') || '');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <form>
      <input
        type="search"
        value={search}
        placeholder="Search"
        onChange={handleChange}
        onBlur={() => localStorage.setItem('search', search)}
      />
    </form>
  );
}

export default Search;
