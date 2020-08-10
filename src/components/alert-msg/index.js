import React from 'react';
import styles from './index.module.css';

const AlertMsg = ({text, type}) => {
    return(
        <div className={styles[`${type}-container`]}>
            <h2>{text}</h2>
        </div>
    );
}

export default AlertMsg;