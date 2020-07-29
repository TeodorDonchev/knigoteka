import React from 'react';
import styles from './index.module.css';


const InputField = ({type, name, placeholder}) => {
    return (
        <div className={styles['input-container']}>
            <input className={styles['input-field']} type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

export default InputField;