import { useState, useEffect } from 'react';
import Card from '../card/Card';
import './cardList.scss';
import { API } from '../../api/api';
import { TMoviesResults, TGenre, TGenres, TCardList } from '../../types';

function CardsList(props: TCardList) {
  const [movies, setMovies] = useState<TMoviesResults[]>();
  const [genres, setGenres] = useState<TGenre[]>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setMovies(props.searchResults?.results);
    setIsLoaded(!!props.searchResults);
  }, [props]);

  useEffect(() => {
    API.getGenres().then((data: void | TGenres) => {
      if (data) setGenres(data.genres);
    });
  }, []);

  return (
    <section className="cards-container" role="list">
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        movies?.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title || movie.name}
            vote_average={movie.vote_average}
            release_date={movie.release_date || movie.first_air_date}
            poster_path={movie.poster_path}
            genre={
              genres?.find((genre) => movie.genre_ids && genre.id === movie.genre_ids[0])?.name
            }
            overview={movie.overview}
            popularity={movie.popularity}
            original_title={movie.original_title}
            original_language={movie.original_language}
          />
        ))
      )}
    </section>
  );
}

export default CardsList;
