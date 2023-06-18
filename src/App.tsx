import React, { Component, ComponentType, FC, useEffect } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
// import WithSuspense from './hoc/WithSuspense';
import store, { RootState } from './redux/redux-store';
import { withRouter } from './utils/withRouter';
import { pages } from './components/utils/pages';
import { mapPages } from './utils';
import { useSelector } from 'react-redux';
import { getInitialized } from './redux/selectors/appSelectors';
import { useAppDispatch } from './hooks';

//lazy loading
const Dialogs = React.lazy(
    () => import('./components/Dialogs/DialogsContainer')
);
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

/*returning type*/
//type MapPropsType = ReturnType<typeof mapStateToProps>

export const App: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(initializeApp());
    }, []);

    const isInitialized = useSelector(getInitialized);

    // if (!isInitialized) return <>123</>;

    const routePages = mapPages(pages);

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-block">
                <div className="app-wrapper-content">
                    <Routes>
                        {routePages.map(
                            ({ component, path }: any, idx: number) => (
                                <Route
                                    key={idx}
                                    path={path}
                                    element={component}
                                />
                            )
                        )}
                    </Routes>
                </div>
            </div>
        </div>
    );
};
