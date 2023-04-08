/* eslint-disable no-console */
import { TMovies, TGenres } from '../types';

const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIES = '/trending/all/day';
const GENRES = '/genre/movie/list';
const SEARCH = '/search/movie';
const API_KEY = '8eba9e05fcfc313e0babba5316909339';

export const API = {
  getMovies() {
    return fetch(`${BASE_URL}${MOVIES}?api_key=${API_KEY}`, {
      method: 'GET',
    })
      .then((response: Response): Promise<TMovies> => response.json())
      .catch((error: Error) => console.log(error));
  },
  getGenres() {
    return fetch(`${BASE_URL}${GENRES}?api_key=${API_KEY}`, {
      method: 'GET',
    })
      .then((response: Response): Promise<TGenres> => response.json())
      .catch((error: Error) => console.log(error));
  },
  search(searchValue: string) {
    return fetch(`${BASE_URL}${SEARCH}?api_key=${API_KEY}&query=${searchValue}`, {
      method: 'GET',
    })
      .then((response: Response): Promise<TMovies> => response.json())
      .catch((error: Error) => console.log(error));
  },
};

export default API;
