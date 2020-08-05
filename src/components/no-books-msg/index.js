import React from 'react';
import styles from './index.module.css';

const NoBooksMsg = ({text}) => {
    if(!text){
        text = 'Sorry, there aren\'t any posted books at the moment';
    }
    return(
        <div className={styles['no-books-container']}>
            <h2>{text}</h2>
        </div>
    );
}

export default NoBooksMsg;