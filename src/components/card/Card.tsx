import React from 'react';
import './card.scss';
import { TMoviesResults } from '../../types';

function Card(props: TMoviesResults) {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className="card" role="listitem">
      <p className="card__rating">{props.vote_average?.toFixed(1)}</p>
      {props.poster_path && (
        <img src={`${baseImgUrl}${props.poster_path}`} alt="poster" className="card__poster" />
      )}
      <div>
        {props.release_date && <span>{props.release_date.substr(0, 4)} • </span>}
        <span>{props.title}</span>
      </div>
      <span className="card__description">
        <u>Genre:</u> {props.genre}
      </span>
    </div>
  );
}

export default Card;
