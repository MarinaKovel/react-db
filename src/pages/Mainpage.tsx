import { useState } from 'react';
import Search from '../components/search/Search';
import CardsList from '../components/cardList/CardsList';
import { TMovies } from '../types';

function Mainpage() {
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
export default Mainpage;
