import { FC } from 'react';
import { mapPages } from '../../utils';
import { pages } from '../utils/pages';
import { Navbar } from '../Navbar';
import { Route, Routes } from 'react-router-dom';
import { AppStyled, ContentStyled, NavStyled } from './styles';
import { useGetMeInfoQuery } from '../../features/api/meApiSlice';

export const App: FC = () => {
  useGetMeInfoQuery();

  const routePages = mapPages(pages);

  return (
    <AppStyled>
      <ContentStyled>
        <Routes>
          {routePages.map(({ component, path }: any, idx: number) => (
            <Route key={idx} path={path} element={component} />
          ))}
        </Routes>
      </ContentStyled>
      <NavStyled>
        <Navbar />
      </NavStyled>
    </AppStyled>
  );
};
