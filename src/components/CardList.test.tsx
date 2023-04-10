import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';

describe('CardsList', () => {
  it('Renders card list', () => {
    render(<CardsList />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
