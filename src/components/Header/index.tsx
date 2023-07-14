import { FC } from 'react';
import logo from '../../img/logo.png';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { logout as asyncLogout } from '../../features/authSlice';
import { useCustomDispatch } from '../../hooks/useCustomDispatch';
import { selectAuthData } from '../../selectors/authSelector';

export const Header: FC = () => {
  const [logout] = useCustomDispatch([asyncLogout]);

  const { isAuth, login } = useAppSelector(selectAuthData);

  const handleClick = () => logout();

  return (
    <header className={styles.header}>
      <img src={logo} />
      <div className={styles.loginBlock}>
        {isAuth ? (
          <>
            {login}
            <button onClick={handleClick}>LogOut</button>
          </>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
