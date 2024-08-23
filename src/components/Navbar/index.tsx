import { FC } from 'react';
import { pages } from '../utils/pages';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthData } from '../../selectors/authSelector';
import { NavItem, Link, Nav } from './styles';
import { IconButton } from '../common/IconButton';
import { BiLogOutCircle, BiLogInCircle } from 'react-icons/bi';
import { useLogoutMutation } from '../../features/api/authApiSlice';

export const Navbar: FC = () => {
  const [logout] = useLogoutMutation();

  const { isAuth, login } = useAppSelector(selectAuthData);

  const handleSignOutClick = () => {
    logout();
  };

  return (
    <Nav>
      {isAuth ? (
        <>
          {pages
            .filter(({ notDisplay }) => !notDisplay)
            .map(({ name, link, icon }) => (
              <NavItem key={link}>
                <Link to={link} key={link}>
                  {icon}
                  <p>{name === 'Profile' ? login : name}</p>
                </Link>
              </NavItem>
            ))}
          <NavItem onClick={handleSignOutClick}>
            <Link to="/login">
              <IconButton Icon={BiLogOutCircle} />
              <p>Sign Out</p>
            </Link>
          </NavItem>
        </>
      ) : (
        <NavItem>
          <Link to="/login">
            <BiLogInCircle />
            <p>Sign In</p>
          </Link>
        </NavItem>
      )}
    </Nav>
  );
};
