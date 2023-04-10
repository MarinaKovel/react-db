import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { genres } from '@mocks/handlers';
import { Card } from '@components';

describe('Card', () => {
  it('Renders card', () => {
    render(
      <Card
        key={1}
        title="title"
        vote_average={9}
        release_date="2023"
        poster_path="path"
        genre="comedie"
      />
    );
    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toHaveClass('card');
  });
  test('Fetch genres', async () => {
    const { findByText } = render(
      <Card
        key={1}
        title="title"
        vote_average={9}
        release_date="2023"
        poster_path="path"
        genre={genres[0].name}
      />
    );
    expect(await findByText(/Action/i)).toBeInTheDocument();
  });
});
