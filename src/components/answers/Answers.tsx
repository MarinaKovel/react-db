import React from 'react';
import { TAnswer } from '../../types';

class Answers extends React.Component<TAnswer, object> {
  render() {
    return (
      <div className="advice">
        <h2 className="advice__question">HI THERE!</h2>
        <span className="advice__question">Dear </span>
        <span>{this.props.answer.to},</span>
        <span className="advice__question">Today </span>
        <span>{this.props.answer.date},</span>
        <p className="advice__question">I just wanted to say </p>
        <p>{this.props.answer.type}</p>
        <span className="advice__question">Because </span>
        <p>{this.props.answer.isCool}</p>
        <p>{this.props.answer.isFriend}</p>
        <p>{this.props.answer.doLike}</p>
        <p className="advice__question">And I strongly recommend you to watch:</p>
        <p>{this.props.answer.message}</p>
        <span className="advice__question">Best regards, </span>
        <span>{this.props.answer.author === 'show' ? this.props.answer.from : 'Anonymous'}</span>
        <br />
        <img src={this.props.answer.image} alt="advice" width={200} height={200} />
      </div>
    );
  }
}
export default Answers;
