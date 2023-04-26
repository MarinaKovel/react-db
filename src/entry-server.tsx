import ReactDOMServer, { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { StrictMode } from 'react';
import type { Request, Response } from 'express';
import { Provider } from 'react-redux';
import { App } from './App';
import { Html } from './Html';
import { setupStore } from './store/store';
import './index.scss';

const store = setupStore();

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
