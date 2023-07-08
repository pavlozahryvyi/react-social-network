import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/common/Preloader/Preloader';
import { pages } from './components/utils/pages';
import { mapPages } from './utils';
import { Header } from './components/Header';
import { useGetAuthUserDataQuery } from './features/api/appSlice';
import { useAppDispatch } from './hooks/useAppDispatch';
import { getAuthData } from './features/authSlice';
import { useAppSelector } from './hooks/useAppSelector';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  // const { isSuccess } = useGetAuthUserDataQuery();

  // if (!isSuccess) return null;

  const authData = useAppSelector((state) => state.auth);

  console.log('---authData', authData);

  useEffect(() => {
    dispatch(getAuthData());
  }, []);

  const routePages = mapPages(pages);

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <div className="app-wrapper-block">
        <div className="app-wrapper-content">
          <Routes>
            {routePages.map(({ component, path }: any, idx: number) => (
              <Route key={idx} path={path} element={component} />
            ))}
          </Routes>
        </div>
      </div> */}
    </div>
  );
};
