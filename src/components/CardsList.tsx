/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Card from './Card';
import moviesJson from '../assets/movies.json';
import './card.scss';

class CardsList extends React.Component {
  render() {
    const cards: number[] = [];
    for (let i = 0; i < moviesJson.movies.length; i += 1) {
      cards.push(moviesJson.movies[i].id);
    }

    return (
      <section className="cards-container" role="list">
        {cards.map((id) => (
          <Card key={id} movie={moviesJson.movies[id - 1]} />
        ))}
      </section>
    );
  }
}

export default CardsList;
