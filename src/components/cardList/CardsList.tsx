import React from 'react';
import Card from '../card/Card';
import moviesJson from '../../assets/movies.json';
import './cardList.scss';

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