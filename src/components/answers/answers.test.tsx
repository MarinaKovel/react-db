import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Answers } from '@components';

const answer = {
  from: 'Name from',
  to: 'Name to',
  date: '01.01.2000',
  type: 'Hi',
  reason: ['You are cool'],
  message: 'Movie advice',
  author: 'show',
  image: 'link',
};

describe('Answers', () => {
  it('Renders answers to form', () => {
    render(<Answers key={1} answer={answer} />);
    expect(screen.getByText(/HI THERE!/i)).toBeInTheDocument();
    expect(screen.getByText(/Dear/i)).toBeInTheDocument();
    expect(screen.getByText(/Today/i)).toBeInTheDocument();
    expect(screen.getByText(/I just wanted to say/i)).toBeInTheDocument();
    expect(screen.getByText(/Because/i)).toBeInTheDocument();
    expect(screen.getByText(/And I strongly recommend you to watch:/i)).toBeInTheDocument();
    expect(screen.getByText(/Best regards,/i)).toBeInTheDocument();
    expect(screen.getByAltText('advice')).toBeInTheDocument();
  });
});
