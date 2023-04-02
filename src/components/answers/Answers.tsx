import React from 'react';
import { TAnswer, TForm } from '../../types';

// <TAnswer, object>
function Answers(props: TForm) {
  return (
    <div className="advice">
      <h2 className="advice__question">HI THERE!</h2>
      <span className="advice__question">Dear </span>
      <span>{props.to},</span>
      <span className="advice__question">Today </span>
      <span>{props.date},</span>
      <p className="advice__question">I just wanted to say </p>
      <p>{props.type}</p>
      <span className="advice__question">Because </span>
      <p>{props.reason[0]}</p>
      <p>{props.reason[1]}</p>
      <p>{props.reason[2]}</p>
      <p className="advice__question">And I strongly recommend you to watch:</p>
      <p>{props.message}</p>
      <span className="advice__question">Best regards, </span>
      <span>{props.author === 'show' ? props.from : 'Anonymous'}</span>
      <br />
      <img src={props.image} alt="advice" width={200} height={200} />
    </div>
  );
}
export default Answers;
