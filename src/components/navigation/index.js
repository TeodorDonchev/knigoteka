import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import logo from '../images/logo.png';

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <img className={styles.logo} src={logo} alt="logo"/>
            <div className={styles['nav-bar']}>
                <Link href="#" title="Home" />
                <Link href="#" title="Books" />
                <Link href="#" title="Profile" />
                <Link href="#" title="Logout" />
                <Link href="#" title="Login" />
                <Link href="#" title="Register" />
            </div>
        </nav>
    )
}

export default Navigation;