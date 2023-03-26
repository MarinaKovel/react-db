/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Advice from '../form/Advice';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class AdviceList extends React.Component<any, any> {
  render() {
    return (
      <Advice
        from={this.state.from}
        to={this.state.to}
        date={this.state.date.toString()}
        type={this.state.type}
        isCool={this.state.isCool}
        isFriend={this.state.isFriend}
        doLike={this.state.doLike}
        message={this.state.message}
        author={this.state.author}
        image={this.state.image}
      />
    );
  }
}

export default AdviceList;
