import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { store } from './redux/redux-store-rtk';

const isDevEnv = import.meta.env.VITE_ENV === 'dev';

const RouterWrapper = isDevEnv ? BrowserRouter : HashRouter;

const SamuraiNetwork: React.FC = () => (
  <RouterWrapper>
    <Provider store={store}>
      <App />
    </Provider>
  </RouterWrapper>
);

export default SamuraiNetwork;
