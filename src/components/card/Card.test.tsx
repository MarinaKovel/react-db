import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { Card } from '@components';
import { searchResults } from '@mocks/handlers';
import { renderWithProviders } from '../../testUtils';

describe('Card', () => {
  it('Renders card', () => {
    renderWithProviders(<Card key={1} card={searchResults} />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toHaveClass('card');
  });
});
