import './aboutpage.scss';

export function Aboutpage() {
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
        provided by Vitest. Movie data is provided by The Movie Database API. Modal window is based
        on createPortal technology.
      </p>
    </>
  );
}
