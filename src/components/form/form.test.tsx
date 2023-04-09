import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';
import { TForm } from '../../types';

const answers: TForm[] = [];
const addAnswer: (value: TForm[]) => void = () => {};

describe('Form', () => {
  it('Renders form', () => {
    render(<Form answers={answers} addAnswer={addAnswer} />);
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
