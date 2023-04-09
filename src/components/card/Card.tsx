import './card.scss';
import { useState, useEffect } from 'react';
import { TMoviesResults } from '../../types';
import Modal from '../modal/Modal';
import { API } from '../../api/api';

function Card(props: TMoviesResults) {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState<number>();
  const [movie, setMovie] = useState<TMoviesResults>();

  function handleClick() {
    setId(props.id);
    setIsModalOpen(true);
  }

  useEffect(() => {
    if (id) {
      API.getMovieById(id).then((data: void | TMoviesResults) => {
        if (data) setMovie(data);
      });
    }
  }, [id]);

  return (
    <div className="card" id={props.id?.toString()} role="listitem" onClickCapture={handleClick}>
      {movie && <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} movie={movie} />}

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
