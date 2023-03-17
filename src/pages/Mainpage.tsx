/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Search from '../components/Search';
import CardsList from '../components/CardsList';

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
