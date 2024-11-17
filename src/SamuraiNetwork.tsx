import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { store } from './redux/redux-store-rtk';

console.log('---import.meta.env.NODE_ENV', import.meta.env.VITE_NODE_ENV);
console.log('---import.meta.env.NODE_ENV', import.meta.env.VITE_API_KEY);

const isDevEnv = import.meta.env.VITE_NODE_ENV === 'development';

const RouterWrapper = isDevEnv ? BrowserRouter : HashRouter;

const SamuraiNetwork: React.FC = () => (
  <RouterWrapper>
    <Provider store={store}>
      <App />
    </Provider>
  </RouterWrapper>
);

export default SamuraiNetwork;
