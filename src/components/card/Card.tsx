import { useState } from 'react';
import { TCard } from 'types';
import { Modal } from '@components';
import { characterAPI } from '../../app/services/CharacterService';
import './card.scss';

export function Card(props: TCard) {
  const { data: card } = characterAPI.useFetchSearchResultsQuery(props.id.toString());
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="card" role="listitem" onClickCapture={() => setIsModalOpen(true)}>
      {card && <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} card={card} />}

      {card && <img src={card.image} alt="poster" className="card__poster" />}
      <p>{card && card.name}</p>
      <br />
      <p className="card__description">
        {card && `${card.species} • ${card.gender}`}
        <br />
        <u>Origin:</u> {card && card.origin.name}
      </p>
    </div>
  );
}
