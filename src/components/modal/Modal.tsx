import { createPortal } from 'react-dom';
import { TModal } from '@types';
import { Button } from '@components';
import './modal.scss';

export function Modal(props: TModal) {
  if (!props.open) return null;

  return createPortal(
    <>
      <div className="modal__bg" onClick={props.onClose} role="complementary" />
      <div className="modal__window">
        <Button name="x" className="modal__close" onClick={props.onClose} />
        <div className="modal__title">{props.card.name}</div>
        <div className="modal__container">
          <div className="modal__left">
            <img src={props.card.image} alt="poster" className="modal__poster" />
            <span className="modal__text">
              {props.card.species} • {props.card.gender}
            </span>
          </div>
          <div className="modal__right">
            <p className="modal__text">
              <u>Location:</u> {props.card.location && props.card.location.name}
              <br />
              <u>Origin:</u> {props.card.origin.name}
              <br />
              <u>Status:</u> {props.card.status}
              <br />
              <u>Episodes:</u>{' '}
              {props.card.episode &&
                props.card.episode.map((episode, index) =>
                  index
                    ? `, ${episode.slice(episode.lastIndexOf('/') + 1)}`
                    : `${episode.slice(episode.lastIndexOf('/') + 1)}`
                )}
            </p>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
