import { StaticRouter } from 'react-router-dom/server';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from './app/App';
import { setupStore } from './store/store';
import './index.scss';

const store = setupStore();

export function render(url: string, opts: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
}
