import React from 'react';
import styles from './index.module.css';

const PageTitle = ({text}) => {
    return (
        <h1 className={styles['page-title']}>{text}</h1>
    );
}

export default PageTitle;