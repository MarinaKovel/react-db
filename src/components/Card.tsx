/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './card.scss';
import moviesJson from '../assets/movies.json';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <p className="card__rating">{moviesJson.movies[0].rating}</p>
        <img src={moviesJson.movies[0].poster} alt="poster" className="card__poster" />
        <div>
          <span>{moviesJson.movies[0].year} • </span>
          <span>{moviesJson.movies[0].name}</span>
        </div>
        <span className="card__description">
          <u>Genre:</u> {moviesJson.movies[0].genre}
        </span>
        <span className="card__description">
          <u>Stars:</u> {moviesJson.movies[0].stars}
        </span>
      </div>
    );
  }
}

export default Card;
