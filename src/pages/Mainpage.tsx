import React from 'react';
import Search from '../components/search/Search';
import CardsList from '../components/cardList/CardsList';

function Mainpage() {
  return (
    <>
      <h1>Movies</h1>
      <Search />
      <CardsList />
    </>
  );
}
export default Mainpage;
