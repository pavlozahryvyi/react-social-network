import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { pages } from '../utils/pages';

const Navbar: React.FC = () => {
    return (
        <nav className={style.nav}>
            {pages.map(({ name, link, notDisplay }) => {
                if (notDisplay) return null;

                return (
                    <div key={link} className={style.item}>
                        <NavLink to={link}>{name}</NavLink>
                    </div>
                );
            })}
        </nav>
    );
};

export default Navbar;
