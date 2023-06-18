import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import store from './redux/redux-store';

const SamuraiNetwork: React.FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    );
};

export default SamuraiNetwork;
