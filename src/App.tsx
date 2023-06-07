import React, { Component, ComponentType } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import { ProfilePage } from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
// import WithSuspense from './hoc/WithSuspense';
import store, { RootState } from './redux/redux-store';
import { Chat } from './components/Chat/Chat';
import { withRouter } from './utils/withRouter';
import { pages } from './components/utils/pages';

//lazy loading
const Dialogs = React.lazy(
    () => import('./components/Dialogs/DialogsContainer')
);
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

/*returning type*/
//type MapPropsType = ReturnType<typeof mapStateToProps>

type PropsType = {
    initializeApp: () => void;
    initialized: boolean;
};

class App extends Component<PropsType> {
    catchAllUnhandledErrors = (error: PromiseRejectionEvent): void => {
        alert(`---some error, ${error}`);
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener(
            'unhandledrejection',
            this.catchAllUnhandledErrors
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            'unhandledrejection',
            this.catchAllUnhandledErrors
        );
    }

    render() {
        const { initialized } = this.props;
        return initialized ? (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-block">
                    <div className="app-wrapper-content">
                        <Routes>
                            {pages.map(({ link, component }) => (
                                <Route
                                    key={link}
                                    path={link}
                                    element={component}
                                />
                            ))}
                        </Routes>
                    </div>
                </div>
            </div>
        ) : (
            <Preloader />
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        initialized: state.app.initialized
    };
};

const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiNetwork: React.FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    );
};

export default SamuraiNetwork;
