/* eslint-disable react/prefer-stateless-function */
import { NavLink } from 'react-router-dom';
import React from 'react';

class Notfoundpage extends React.Component {
  render() {
    return (
      <div>
        This page doesn&apos;t exist. Go <NavLink to="/">home</NavLink>
      </div>
    );
  }
}
export default Notfoundpage;
