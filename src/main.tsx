import { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import App from './app/App';
import './index.scss';

const store = setupStore();

function Main() {
  return (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

export default Main;
