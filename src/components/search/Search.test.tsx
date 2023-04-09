import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TMovies } from '../../types';
import { searchResults } from '../../mocks/handlers';
import Search from './Search';

const doSearch: (value: TMovies) => void = () => {};

describe('Search', () => {
  it('Renders search input', () => {
    render(<Search searchResults={searchResults} doSearch={doSearch} />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
