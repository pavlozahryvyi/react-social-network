import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "./StoreContext";
import {HashRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
        ,
        document.getElementById('root'));
};


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});


serviceWorker.unregister();
