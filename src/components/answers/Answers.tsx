import React from 'react';

export type TForm = {
  from: string;
  to: string;
  date: string;
  type: string;
  isCool: string;
  isFriend: string;
  doLike: string;
  message: string;
  author: string;
  image: string;
};
export type TValid = {
  from: boolean;
  to: boolean;
  date: boolean;
  type: boolean;
  reason: boolean;
  message: boolean;
  author: boolean;
  image: boolean;
};

class Answers extends React.Component<TForm, object> {
  render() {
    return (
      <div className="advice">
        <h2 className="advice__question">HI THERE!</h2>
        <span className="advice__question">Dear </span>
        <span>{this.props.to},</span>
        <span className="advice__question">Today </span>
        <span>{this.props.date},</span>
        <p className="advice__question">I just wanted to say </p>
        <p>{this.props.type}</p>
        <span className="advice__question">Because </span>
        <p>{this.props.isCool}</p>
        <p>{this.props.isFriend}</p>
        <p>{this.props.doLike}</p>
        <p className="advice__question">And I strongly recommend you to watch:</p>
        <p>{this.props.message}</p>
        <span className="advice__question">Best regards, </span>
        <span>{this.props.author === 'show' ? this.props.from : 'Anonymous'}</span>
        <br />
        <img src={this.props.image} alt="advice" width={200} height={200} />
      </div>
    );
  }
}
export default Answers;
