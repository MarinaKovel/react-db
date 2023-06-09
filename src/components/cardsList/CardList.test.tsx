import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { handlers } from '@mocks/handlers';
import { setupServer } from 'msw/node';
import { CardsList } from '@components';
import { renderWithProviders } from '@services/testUtils';

const server = setupServer(...handlers);

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('CardsList', () => {
  it('Renders card list', () => {
    renderWithProviders(<CardsList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('Fetch cards', async () => {
    const { findByText } = renderWithProviders(<CardsList />);
    expect(await findByText(/Albert Einstein/i)).toBeInTheDocument();
  });
});
