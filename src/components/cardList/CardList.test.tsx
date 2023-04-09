import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { searchResults } from '../../mocks/handlers';
import CardsList from './CardsList';

describe('CardsList', () => {
  it('Renders card list', () => {
    render(<CardsList searchResults={searchResults} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  test('Fetch all and searched cards', async () => {
    const { findByText } = render(<CardsList searchResults={searchResults} />);
    expect(await findByText(/Shazam!/i)).toBeInTheDocument();
  });
});
