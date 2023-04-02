import React from 'react';
import './layout.scss';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="header" role="navigation">
        <NavLink to="/" className="navlink">
          Main
        </NavLink>
        <NavLink to="/about" className="navlink">
          About us
        </NavLink>
        <NavLink to="/form" className="navlink">
          Form
        </NavLink>
      </header>
      <Outlet />
      <footer className="footer">2023</footer>
    </>
  );
}

export default Layout;
