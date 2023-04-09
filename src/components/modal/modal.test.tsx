import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { searchResults } from '../../mocks/handlers';
import Modal from './Modal';

describe('Modal', () => {
  it('Renders modal window', () => {
    render(<Modal open onClose={() => {}} movie={searchResults.results[0]} />);
    expect(screen.getByText(/Billy Batson/i)).toBeInTheDocument();
    expect(screen.getByText(/Popularity/i)).toBeInTheDocument();
    expect(screen.getByText(/Original title/i)).toBeInTheDocument();
    expect(screen.getByText(/Original language/i)).toBeInTheDocument();
  });
});
