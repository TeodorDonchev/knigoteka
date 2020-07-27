import React from 'react';
import styles from './index.module.css';

const MainButton = ({ text }) => {
    return (
        <button className={styles['main-button']}>{text}</button>
    );
}

export default MainButton;