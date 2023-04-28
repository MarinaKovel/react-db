import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import { setupStore, RootState } from './store/store';
import './index.scss';

type TWindow = Window & typeof globalThis & { PRELOADED_STATE?: RootState };

const store = setupStore((window as TWindow).PRELOADED_STATE);
const container = document.getElementById('root');

function FullApp() {
  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
  delete (window as TWindow).PRELOADED_STATE;
}
