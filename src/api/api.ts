/* eslint-disable no-console */
import { TMovies, TGenres, TMoviesResults } from 'types';

enum URL {
  BASE_URL = 'https://api.themoviedb.org/3',
  MOVIES = '/trending/all/day',
  MOVIE = '/movie/',
  GENRES = '/genre/movie/list',
  SEARCH = '/search/movie',
  API_KEY = '8eba9e05fcfc313e0babba5316909339',
}

export const API = {
  getMovieById(id: number) {
    return fetch(`${URL.BASE_URL}${URL.MOVIE}${id}?api_key=${URL.API_KEY}`, {
      method: 'GET',
    })
      .then((response: Response): Promise<TMoviesResults> => response.json())
      .catch((error: Error) => console.log(error));
  },
  getMovies() {
    return fetch(`${URL.BASE_URL}${URL.MOVIES}?api_key=${URL.API_KEY}`, { method: 'GET' })
      .then((response: Response): Promise<TMovies> => response.json())
      .catch((error: Error) => console.log(error));
  },
  getGenres() {
    return fetch(`${URL.BASE_URL}${URL.GENRES}?api_key=${URL.API_KEY}`, { method: 'GET' })
      .then((response: Response): Promise<TGenres> => response.json())
      .catch((error: Error) => console.log(error));
  },
  search(searchValue: string) {
    return fetch(`${URL.BASE_URL}${URL.SEARCH}?api_key=${URL.API_KEY}&query=${searchValue}`, {
      method: 'GET',
    })
      .then((response: Response): Promise<TMovies> => response.json())
      .catch((error: Error) => console.log(error));
  },
};

export default API;
