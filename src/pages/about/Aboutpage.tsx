import React from 'react';
import './about.scss';

function Aboutpage() {
  return (
    <>
      <div className="about">
        Mother nature
        <br />
        made us do it :)
      </div>
      <p className="project">
        This SPA Movie database is built using React-Router version 6, React Functional Components,
        hooks and React Hook Form. Vite, ESLint and Prettier were used for development. Testing is
        provided by Vitest.
      </p>
    </>
  );
}

export default Aboutpage;
