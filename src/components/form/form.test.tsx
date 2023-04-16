import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { Form } from '@components';
import { renderWithProviders } from '../../testUtils';

describe('Form', () => {
  it('Renders form', () => {
    renderWithProviders(<Form />);
    expect(screen.getByText(/Movie adviser/i)).toBeInTheDocument();
    expect(screen.getByText(/Your name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Greetings to/i)).toBeInTheDocument();
    expect(screen.getByText(/Date of greetings/i)).toBeInTheDocument();
    expect(screen.getByText(/Type of greetings/i)).toBeInTheDocument();
    expect(screen.getByText(/Reason:/i)).toBeInTheDocument();
    expect(screen.getByText(/Movie advice/i)).toBeInTheDocument();
    expect(screen.getByText(/Show author/i)).toBeInTheDocument();
    expect(screen.getByText(/Add picture/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });
});
