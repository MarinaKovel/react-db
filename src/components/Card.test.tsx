import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import moviesJson from '../assets/movies.json';
import Card from './Card';

describe('Card', () => {
  it('Renders card', () => {
    render(<Card key={1} movie={moviesJson.movies[0]} />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toHaveClass('card');
  });
});
