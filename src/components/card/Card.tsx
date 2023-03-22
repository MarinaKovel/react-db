/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './card.scss';

interface MovieList {
  movie: Movie;
}
interface Movie {
  name: string;
  year: string;
  genre: string;
  rating: number;
  stars: string;
  poster: string;
}

class Card extends React.Component<MovieList, Movie> {
  constructor(props: MovieList) {
    super(props);
    this.state = {
      name: props.movie.name,
      year: props.movie.year,
      genre: props.movie.genre,
      rating: props.movie.rating,
      stars: props.movie.stars,
      poster: props.movie.poster,
    };
  }

  render() {
    return (
      <div className="card" role="listitem">
        <p className="card__rating">{this.state.rating}</p>
        <img src={this.state.poster} alt="poster" className="card__poster" />
        <div>
          <span>{this.state.year} • </span>
          <span>{this.state.name}</span>
        </div>
        <span className="card__description">
          <u>Genre:</u> {this.state.genre}
        </span>
        <span className="card__description">
          <u>Stars:</u> {this.state.stars}
        </span>
      </div>
    );
  }
}

export default Card;
