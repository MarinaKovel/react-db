/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './layout.scss';
import { NavLink, Outlet } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <NavLink to="/" className="navlink">
            Main
          </NavLink>
          <NavLink to="/about" className="navlink">
            About us
          </NavLink>
        </header>
        <Outlet />
        <footer className="footer">2023</footer>
      </>
    );
  }
}

export default Layout;
