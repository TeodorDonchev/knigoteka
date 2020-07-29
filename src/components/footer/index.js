import React from 'react';
import styles from './index.module.css';

const Footer = ({type}) => {
    return (
        <footer className={styles[`${type}-footer`]}>
            <div>This is a project for the ReactJS Course 2020 at Software University.</div>
        </footer>
    );
}

export default Footer;