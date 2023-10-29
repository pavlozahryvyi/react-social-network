import { FC, useEffect } from 'react';
import { getAuthData as asyncGetAuthData } from '../../features/authSlice';
import { mapPages } from '../../utils';
import { pages } from '../utils/pages';
import { Navbar } from '../Navbar';
import { Route, Routes } from 'react-router-dom';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { AppWrapper, ContentWrapper, NavWrapper } from './styles';

export const App: FC = () => {
  const [getAuthData] = useCustomDispatch([asyncGetAuthData]);

  useEffect(() => {
    getAuthData();
  }, []);

  const routePages = mapPages(pages);

  return (
    <AppWrapper>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <ContentWrapper>
        <Routes>
          {routePages.map(({ component, path }: any, idx: number) => (
            <Route key={idx} path={path} element={component} />
          ))}
        </Routes>
      </ContentWrapper>
    </AppWrapper>
  );
};
