/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Card from './Card';
import moviesJson from '../assets/movies.json';
import './card.scss';

class CardsList extends React.Component {
  render() {
    const cards = moviesJson.movies.map((movie) => <Card key={movie.id} movie={movie} />);

    return (
      <section className="cards-container" role="list">
        {cards}
      </section>
    );
  }
}

export default CardsList;
