import { useState } from 'react';
import { TForm } from 'types';
import { Form, Answers } from '@components';

export function Formpage() {
  const [answers, setAnswers] = useState<TForm[]>([]);

  const addAnswer = (allAnswers: TForm[]) => {
    setAnswers(allAnswers);
  };

  return (
    <>
      <Form answers={answers} addAnswer={addAnswer} />
      {answers.map((el, i) => (
        <Answers key={`${i}+${el.to}`} answer={el} />
      ))}
    </>
  );
}
