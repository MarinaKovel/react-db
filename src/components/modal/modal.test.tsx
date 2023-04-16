import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { searchResults } from '@mocks/handlers';
import { Modal } from '@components';
import { renderWithProviders } from '../../testUtils';

describe('Modal', () => {
  it('Renders modal window', () => {
    renderWithProviders(<Modal open onClose={() => {}} card={searchResults} />);
    expect(screen.getByText(/Albert Einstein/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/C-137/i)).toBeInTheDocument();
    expect(screen.getByText(/12/i)).toBeInTheDocument();
    expect(screen.getByAltText('poster')).toBeInTheDocument();
  });
});
