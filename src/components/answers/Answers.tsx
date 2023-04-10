import { TAnswer } from 'types';

export function Answers(props: TAnswer) {
  return (
    <div className="advice">
      <h2 className="advice__question">HI THERE!</h2>
      <span className="advice__question">Dear </span>
      <span>{props.answer.to},</span>
      <span className="advice__question"> Today </span>
      <span>{props.answer.date},</span>
      <p className="advice__question">I just wanted to say </p>
      <p>{props.answer.type}</p>
      <span className="advice__question">Because </span>
      <p>{props.answer.reason[0]}</p>
      <p>{props.answer.reason[1]}</p>
      <p>{props.answer.reason[2]}</p>
      <p className="advice__question">And I strongly recommend you to watch:</p>
      <p>{props.answer.message}</p>
      <span className="advice__question">Best regards, </span>
      <span>{props.answer.author === 'show' ? props.answer.from : 'Anonymous'}</span>
      <br />
      <img src={props.answer.image} alt="advice" width={200} height={200} />
    </div>
  );
}
