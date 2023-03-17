/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Card from './Card';
import './card.scss';

class CardsList extends React.Component {
  render() {
    return (
      <div className="cards-container">
        <Card />
        <Card />
      </div>
    );
  }
}

export default CardsList;
