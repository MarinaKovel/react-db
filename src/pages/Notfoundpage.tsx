import { NavLink } from 'react-router-dom';
import React from 'react';

class Notfoundpage extends React.Component {
  render() {
    return (
      <div>
        This page doesn&apos;t exist. Go to{' '}
        <NavLink to="/">
          <u>Main page</u>
        </NavLink>
      </div>
    );
  }
}
export default Notfoundpage;
