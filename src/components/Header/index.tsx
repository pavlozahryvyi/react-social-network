import { FC } from 'react';
import logo from '../../img/logo.png';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { logoutThunk } from '../../thunks/loginThunk';
import { useSelector } from 'react-redux';
import { getAuthData } from '../../selectors/authSelector';
import { useAppSelector } from '../../hooks/useAppSelector';

export const Header: FC = () => {
  const dispatch = useAppDispatch();

  const { isAuth, login } = useAppSelector((state) => state.auth);

  const handleClick = () => dispatch(logoutThunk());

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
