import React from 'react';
import './card.scss';
import { TMovieList } from '../../types';

function Card(props: TMovieList) {
  return (
    <div className="card" role="listitem">
      <p className="card__rating">{props.movie.rating}</p>
      <img src={props.movie.poster} alt="poster" className="card__poster" />
      <div>
        <span>{props.movie.year} • </span>
        <span>{props.movie.name}</span>
      </div>
      <span className="card__description">
        <u>Genre:</u> {props.movie.genre}
      </span>
      <span className="card__description">
        <u>Stars:</u> {props.movie.stars}
      </span>
    </div>
  );
}

export default Card;
