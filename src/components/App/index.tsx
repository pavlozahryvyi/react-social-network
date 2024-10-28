import { FC } from 'react';
import { mapPages } from '../../utils';
import { pages } from '../utils/pages';
import { Navbar } from '../Navbar';
import { Route, Routes } from 'react-router-dom';
import { AppWrapper, ContentWrapper, NavWrapper } from './styles';

export const App: FC = () => {
  const routePages = mapPages(pages);

  return (
    <AppWrapper>
      <ContentWrapper>
        <Routes>
          {routePages.map(({ component, path }: any, idx: number) => (
            <Route key={idx} path={path} element={component} />
          ))}
        </Routes>
      </ContentWrapper>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
    </AppWrapper>
  );
};
