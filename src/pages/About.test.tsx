import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Aboutpage from './About';

describe('Aboutpage', () => {
  it('Renders page about us', () => {
    render(<Aboutpage />);
    screen.debug();
    expect(screen.getByText(/This SPA Movie database/i)).toBeInTheDocument();
    expect(screen.getByText(/Mother nature/i)).toBeInTheDocument();
  });
});
