import { Card } from '@components';
import { SyncLoader } from 'react-spinners';
import './cardList.scss';
import { searchAPI } from '../../app/services/SearchService';
import { useAppSelector } from '../../hooks/redux';

export function CardsList() {
  const { search } = useAppSelector((state) => state.searchReducer);
  const { data: cards, error, isLoading } = searchAPI.useFetchSearchResultsQuery(search);
  if (error) return <h3>No results are found</h3>;

  return (
    <section className="cards-container" role="list">
      {isLoading && <SyncLoader loading={isLoading} color="#f4f750" size={25} />}
      {cards && cards.results.map((card) => <Card key={card.id} id={card.id} />)}
    </section>
  );
}
