import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { searchResults } from '@mocks/handlers';
import { CardsList } from '@components';
import { renderWithProviders } from '../../testUtils';

describe('CardsList', () => {
  it('Renders card list', () => {
    renderWithProviders(<CardsList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  test('Fetch all and searched cards', async () => {
    const { findByText } = renderWithProviders(<CardsList />);
    expect(await findByText(/No results are found/i)).toBeInTheDocument();
  });
});

// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import { findByText, fireEvent, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
// import { CardsList } from '@components';
// import { renderWithProviders } from '../../testUtils';

// const einstein = {
//   id: 11,
//   name: 'Albert Einstein',
//   status: 'Dead',
//   species: 'Human',
//   type: '',
//   gender: 'Male',
//   origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
//   location: {
//     name: 'Earth (Replacement Dimension)',
//     url: 'https://rickandmortyapi.com/api/location/20',
//   },
//   image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
//   episode: ['https://rickandmortyapi.com/api/episode/12'],
// };
// const searc = { name: 'einstein' };
// const searchParams = new URLSearchParams(searc);

// export const handlers = [
//   rest.get(`https://rickandmortyapi.com/api/character?name=einstein`, (req, res, ctx) => {
//     return res(ctx.json(einstein), ctx.delay(150));
//   }),
// ];

// const server = setupServer(...handlers);

// Enable API mocking before tests.
// beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
// afterAll(() => server.close());

// test('fetches & receives characters', async () => {
//  renderWithProviders(<CardsList />);
//  expect(screen.getByRole('list')).toBeInTheDocument();
// expect(await screen.findByText(/Albert/i)).toBeInTheDocument();
// should show no user initially, and not be fetching a user
// expect(screen.getByText(/No results are found/i)).toBeInTheDocument();
// expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
// after some time, the user should be received
//  expect(await screen.findByText(/No results are found/i)).toBeInTheDocument();
// expect(screen.getByText(/No results are found/i)).not.toBeInTheDocument();
// expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
// });
