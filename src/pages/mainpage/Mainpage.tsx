import { useState } from 'react';
import { TMovies } from 'types';
import { Search, CardsList } from '@components';

export function Mainpage() {
  const [searchResults, setSearchResults] = useState<TMovies>();

  const doSearch = (searchVal: TMovies) => setSearchResults(searchVal);

  return (
    <>
      <h1>Movies</h1>
      <Search searchResults={searchResults} doSearch={doSearch} />
      <CardsList searchResults={searchResults} />
    </>
  );
}
