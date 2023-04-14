import { Form, Answers } from '@components';
import { useAppSelector } from '../../hooks/redux';

export function Formpage() {
  const { answers } = useAppSelector((state) => state.answersReducer);

  return (
    <>
      <Form />
      {answers.map((el, i) => (
        <Answers key={`${i}+${el.to}`} answer={el} />
      ))}
    </>
  );
}
