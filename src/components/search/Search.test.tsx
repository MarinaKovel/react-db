import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { Search } from '@components';
import { renderWithProviders } from '../../testUtils';

describe('Search', () => {
  it('Renders search input', () => {
    renderWithProviders(<Search />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
