/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Form from '../components/form/Form';

class Formspage extends React.Component {
  render() {
    return (
      <div className="forms__container">
        <Form />
        <div>My advices</div>
      </div>
    );
  }
}

export default Formspage;
