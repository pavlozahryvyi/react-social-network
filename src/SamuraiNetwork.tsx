import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { App } from './App';
import store from './redux/redux-store';

console.log('NODE_ENV', process.env.NODE_ENV);

let RouterWrapper = HashRouter;

if (process.env.NODE_ENV === 'development') {
  RouterWrapper = BrowserRouter;
}

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
