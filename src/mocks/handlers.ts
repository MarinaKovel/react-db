import { rest } from 'msw';

export const searchResults = {
  id: 11,
  name: 'Albert Einstein',
  status: 'Dead',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
  location: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/12'],
};

const value = 'name=einstein';
const valueParams = new URLSearchParams(value);

export const handlers = [
  rest.get(`https://rickandmortyapi.com/api/character/11`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchResults));
  }),
  rest.get(`https://rickandmortyapi.com/api/character/${valueParams}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchResults));
  }),
];
