import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { TCurrentPage } from 'types';
import './layout.scss';

export function Layout() {
  const location = useLocation();
  const pathNames: TCurrentPage = {
    '/': 'Main',
    '/about': 'About us',
    '/form': 'Form',
  };

  return (
    <>
      <header className="header" role="navigation">
        <span className="header__current">{pathNames[location.pathname] || 'Not Found'}</span>
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
