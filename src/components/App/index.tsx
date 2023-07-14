import { FC, useEffect } from 'react';
import styles from './App.module.css';
import { getAuthData as asyncGetAuthData } from '../../features/authSlice';
import { mapPages } from '../../utils';
import { pages } from '../utils/pages';
import { Header } from '../Header';
import { Navbar } from '../Navbar';
import { Route, Routes } from 'react-router-dom';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';

export const App: FC = () => {
  const [getAuthData] = useCustomDispatch([asyncGetAuthData]);

  useEffect(() => {
    getAuthData();
  }, []);

  const routePages = mapPages(pages);

  return (
    <div className={styles.appWrapper}>
      <Header />
      <Navbar />
      <div className={styles.appWrapperBlock}>
        <div className={styles.appWrapperContent}>
          <Routes>
            {routePages.map(({ component, path }: any, idx: number) => (
              <Route key={idx} path={path} element={component} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
};
