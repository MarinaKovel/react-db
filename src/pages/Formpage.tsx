import { useState } from 'react';
import Form from '../components/form/Form';
import Answers from '../components/answers/Answers';
import { TForm } from '../types';

function Formpage() {
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

export default Formpage;
