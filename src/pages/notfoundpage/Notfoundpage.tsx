import { NavLink } from 'react-router-dom';

export function Notfoundpage() {
  return (
    <div>
      This page does not exist. Go to{' '}
      <NavLink to="/">
        <u>Main page</u>
      </NavLink>
    </div>
  );
}
