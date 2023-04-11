import { rest } from 'msw';

export const searchResults = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/wybmSmviUXxlBmX44gtpow5Y9TB.jpg',
      genre_ids: [28, 35, 14],
      id: 594767,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'Shazam! Fury of the Gods',
      overview:
        'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.',
      popularity: 1516.918,
      poster_path: '/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg',
      release_date: '2023-03-15',
      title: 'Shazam! Fury of the Gods',
      video: false,
      vote_average: 6.9,
      vote_count: 496,
    },
  ],
  total_pages: 200,
  total_results: 2000,
};

export const genres = [{ id: 28, name: 'Action' }];

const apiKey = 'api_key=8eba9e05fcfc313e0babba5316909339';
const apiKeyParams = new URLSearchParams(apiKey);

const search = { api_key: apiKey, query: 'Shazam' };
const searchParams = new URLSearchParams(search);

export const handlers = [
  rest.get(`https://api.themoviedb.org/3/trending/all/day${apiKeyParams}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchResults));
  }),
  rest.get(`https://api.themoviedb.org/3/search/movie${searchParams}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchResults));
  }),
  rest.get(`https://api.themoviedb.org/3/genre/movie/list`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(genres));
  }),
  rest.get(`https://api.themoviedb.org/3/movie/594767${apiKeyParams}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchResults.results[0]));
  }),
];
