import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { pages } from '../utils/pages';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { logout as asyncLogout } from '../../features/authSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthData } from '../../selectors/authSelector';
import logo from '../../img/logo.png';
import { LinkBlock, Link } from './styles';

export const Navbar: FC = () => {
  const [logout] = useCustomDispatch([asyncLogout]);

  const { isAuth, login } = useAppSelector(selectAuthData);

  const handleClick = () => logout();

  return (
    <nav>
      <img src={logo} height={30} />
      {pages.map(({ name, link, notDisplay }) => {
        if (notDisplay) return null;

        return (
          <LinkBlock key={link} className="item">
            <Link to={link} key={link}>
              {name}
            </Link>
          </LinkBlock>
        );
      })}
      {isAuth ? (
        <>
          {login}
          <button onClick={handleClick}>LogOut</button>
        </>
      ) : (
        <NavLink to={'/login'}>Login</NavLink>
      )}
    </nav>
  );
};
