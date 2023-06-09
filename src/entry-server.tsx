import { StaticRouter } from 'react-router-dom/server';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { searchAPI } from './services/SearchService';
import { setupStore } from './store/store';
import App from './app/App';
import './index.scss';

export async function render(url: string, opts: RenderToPipeableStreamOptions) {
  const store = setupStore();
  store.dispatch(searchAPI.endpoints.fetchSearchResults.initiate(''));
  await Promise.all(store.dispatch(searchAPI.util.getRunningQueriesThunk()));

  const storeWithCards = store.getState();
  const preloadedState = () => {
    return `<script>window.PRELOADED_STATE = ${JSON.stringify(storeWithCards).replace(
      /</g,
      '\\u003c'
    )}</script>`;
  };

  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );

  return { stream, preloadedState };
}
