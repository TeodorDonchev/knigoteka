import React from 'react';
import styles from './index.module.css';

const Link = ({ title, href }) => {
    return (
        <div className={styles['nav-item']}>
            <a href={href} className={styles['nav-link']}>
                {title}
            </a>
        </div>
    )
}

export default Link;