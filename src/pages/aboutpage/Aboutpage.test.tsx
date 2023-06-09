import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Aboutpage } from '@pages';

describe('Aboutpage', () => {
  it('Renders page about us', () => {
    render(<Aboutpage />);
    screen.debug();
    expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
    expect(screen.getByText(/Mother nature/i)).toBeInTheDocument();
  });
});
