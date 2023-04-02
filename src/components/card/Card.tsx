import React, { useState } from 'react';
import './card.scss';
import { TMovieList, TMovie } from '../../types';

// <TMovieList, TMovie>
function Card(props: TMovieList) {
  const [name, setName] = useState(props.movie.name);
  const [year, setYear] = useState(props.movie.year);
  const [genre, setGenre] = useState(props.movie.genre);
  const [rating, setRating] = useState(props.movie.rating);
  const [stars, setStars] = useState(props.movie.stars);
  const [poster, setPoster] = useState(props.movie.poster);

  return (
    <div className="card" role="listitem">
      <p className="card__rating">{rating}</p>
      <img src={poster} alt="poster" className="card__poster" />
      <div>
        <span>{year} • </span>
        <span>{name}</span>
      </div>
      <span className="card__description">
        <u>Genre:</u> {genre}
      </span>
      <span className="card__description">
        <u>Stars:</u> {stars}
      </span>
    </div>
  );
}

export default Card;
