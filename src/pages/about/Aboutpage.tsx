import React from 'react';
import './about.scss';

class Aboutpage extends React.Component {
  render() {
    return (
      <>
        <div className="about">
          Mother nature
          <br />
          made us do it :)
        </div>
        <p className="project">
          This SPA Movie database is built using React Class Components and React-Router version 6.
          Vite, ESLint and Prettier were used for development. Testing is provided by Vitest.
        </p>
      </>
    );
  }
}
export default Aboutpage;
