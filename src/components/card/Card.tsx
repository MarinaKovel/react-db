import { useState } from 'react';
import { TCharacter } from 'types';
import { Modal } from '@components';
import { characterAPI } from '../../services/CharacterService';
import './card.scss';

export function Card(props: { card: TCharacter }) {
  const { data: card } = characterAPI.useFetchSearchResultsQuery(props.card.id.toString());
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="card" role="listitem" onClickCapture={() => setIsModalOpen(true)}>
      {card && <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} card={card} />}

      {props.card && <img src={props.card.image} alt="poster" className="card__poster" />}
      <p>{props.card && props.card.name}</p>
      <br />
      <p className="card__description">
        {props.card && `${props.card.species} • ${props.card.gender}`}
        <br />
        <u>Origin:</u> {props.card && props.card.origin.name}
      </p>
    </div>
  );
}
