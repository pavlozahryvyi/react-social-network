import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { App } from './App';
// import store from './redux/redux-store';
import { store } from './redux/redux-store-rtk';

const isDevEnv = process.env.NODE_ENV === 'development';

const RouterWrapper = isDevEnv ? BrowserRouter : HashRouter;

const SamuraiNetwork: React.FC = () => {
  return (
    <RouterWrapper>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterWrapper>
  );
};

export default SamuraiNetwork;
