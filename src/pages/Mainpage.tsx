/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Search from '../components/search/Search';
import CardsList from '../components/cardList/CardsList';

class Mainpage extends React.Component {
  render() {
    return (
      <>
        <Search />
        <CardsList />
      </>
    );
  }
}
export default Mainpage;
