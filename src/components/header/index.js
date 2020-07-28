import React from 'react';
import LinkPath from '../link-path';
import styles from './index.module.css';
import logo from '../images/logo-text.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            <div className={styles['nav-bar']}>
                <LinkPath href="/" title="Home" />
                <LinkPath href="/all-books" title="Books" />
                <LinkPath href="#" title="Profile" />
                <LinkPath href="#" title="Logout" />
                <LinkPath href="/login" title="Login" />
                <LinkPath href="/register" title="Register" />
            </div>
        </nav>
    )
}

export default Header;