import { createPortal } from 'react-dom';
import { TModal } from '../../types';
import './modal.scss';

function Modal(props: TModal) {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  if (!props.open) return null;

  return createPortal(
    <>
      <div className="modal__bg" onClick={props.onClose} role="complementary" />
      <div className="modal__window">
        <button type="button" className="modal__close" onClick={props.onClose}>
          x
        </button>
        <div className="modal__title">{props.movie.title}</div>
        <div className="modal__container">
          <div className="modal__left">
            <p className="card__rating">{props.movie.vote_average?.toFixed(1)}</p>
            <img
              src={`${baseImgUrl}${props.movie.poster_path}`}
              alt="poster"
              className="modal__poster"
            />
            <span className="modal__text">{props.movie.release_date?.substr(0, 4)}</span>
          </div>
          <div className="modal__right">
            <p className="modal__text">{props.movie.overview}</p>
            <br />
            <p className="modal__text">
              <u>Popularity:</u> {props.movie.popularity}
            </p>
            <p className="modal__text">
              <u>Original title:</u> {props.movie.original_title}
            </p>
            <p className="modal__text">
              <u>Original language:</u> {props.movie.original_language}
            </p>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

export default Modal;
