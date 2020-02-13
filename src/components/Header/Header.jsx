import React from "react";
import logo from "../../img/logo.png";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo}/>
            <h1>Welcome</h1>
        </header>
    );
};

export default Header;