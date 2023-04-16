import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { Card } from '@components';
import { card } from '@mocks/handlers';
import { renderWithProviders } from '@services/testUtils';

describe('Card', () => {
  it('Renders card', () => {
    renderWithProviders(<Card key={1} card={card} />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toHaveClass('card');
    expect(screen.getByAltText('poster')).toBeInTheDocument();
  });
});
