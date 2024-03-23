import { FC } from 'react';
import { pages } from '../utils/pages';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { logout as asyncLogout } from '../../features/authSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthData } from '../../selectors/authSelector';
import logo from '../../img/logo.png';
import { LinkBlock, Link, Nav, NavLogo } from './styles';
import { IconButton } from '../common/IconButton';
import { BiLogOutCircle, BiLogInCircle } from 'react-icons/bi';

export const Navbar: FC = () => {
  const [logout] = useCustomDispatch([asyncLogout]);

  const { isAuth, login } = useAppSelector(selectAuthData);

  const handleClick = () => logout();

  return (
    <Nav>
      <NavLogo>
        <img src={logo} height={30} />
      </NavLogo>
      {isAuth ? (
        <>
          {pages
            .filter(({ notDisplay }) => !notDisplay)
            .map(({ name, link, icon }) => {
              return (
                <LinkBlock key={link}>
                  <Link to={link} key={link}>
                    {icon}
                    {name === 'Profile' ? login : name}
                  </Link>
                </LinkBlock>
              );
            })}
          <IconButton onClick={handleClick} Icon={BiLogOutCircle} />
        </>
      ) : (
        <LinkBlock>
          <Link to={'/login'}>
            <BiLogInCircle />
            Login
          </Link>
        </LinkBlock>
      )}
    </Nav>
  );
};
