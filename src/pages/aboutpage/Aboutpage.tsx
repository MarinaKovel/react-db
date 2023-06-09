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
        This SPA &apos;Rick and Morty database&apos; is built using Server Side Rendering (SSR),
        React-Router version 6, React Functional Components, Redux Toolkit, hooks and React Hook
        Form. Vite, ESLint and Prettier were used for development. Characters&apos; data is provided
        by The Rick and Morty API. Modal window is based on createPortal technology. Testing is
        provided by Vitest (unit tests) and Cypress (E2E tests).
      </p>
    </>
  );
}
