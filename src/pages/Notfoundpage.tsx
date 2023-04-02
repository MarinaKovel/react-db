import { NavLink } from 'react-router-dom';
import React from 'react';

function Notfoundpage() {
  return (
    <div>
      This page does not exist. Go to{' '}
      <NavLink to="/">
        <u>Main page</u>
      </NavLink>
    </div>
  );
}
export default Notfoundpage;
