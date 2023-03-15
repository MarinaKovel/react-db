/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/about">About us</NavLink>
        </header>
        <Outlet />
        <footer>2023</footer>
      </>
    );
  }
}

export default Layout;
