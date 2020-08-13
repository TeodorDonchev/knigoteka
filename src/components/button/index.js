import React from 'react';
import styles from './index.module.css';

const Button = ({ text, onClick, type }) => {
    return (
        <button type={type} onClick={onClick} className={styles[`${type}-button`]}>{text}</button>
    );
}

export default Button;