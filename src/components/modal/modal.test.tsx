import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { card } from '@mocks/handlers';
import { Modal } from '@components';
import { renderWithProviders } from '@services/testUtils';

describe('Modal', () => {
  it('Renders modal window', () => {
    renderWithProviders(<Modal open onClose={() => {}} card={card} />);
    expect(screen.getByText(/Albert Einstein/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/C-137/i)).toBeInTheDocument();
    expect(screen.getByText(/12/i)).toBeInTheDocument();
    expect(screen.getByAltText('poster')).toBeInTheDocument();
  });
});
