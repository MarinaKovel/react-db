import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { renderWithProviders } from '../testUtils';

describe('App', () => {
  it('Renders Main page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('Renders About page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/This SPA 'Rick and Morty' database/i)).toBeInTheDocument();
  });

  it('Renders Form page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Movie adviser/i)).toBeInTheDocument();
  });

  it('Renders Not Found if not valid path', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/This page does not exist./i)).toBeInTheDocument();
  });
});
