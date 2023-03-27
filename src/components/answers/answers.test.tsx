import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Answers from './Answers';

describe('Answers', () => {
  it('Renders answers to form', () => {
    render(
      <Answers
        key={1}
        from="Name from"
        to="Name to"
        date="01.01.2000"
        type="Hi"
        isCool="You are cool"
        isFriend=""
        doLike=""
        message="Movie advice"
        author="show"
        image="link"
      />
    );
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