import React from 'react';
import styles from './index.module.css';


const InputField = ({ type, name, value, placeholder, onChange }) => {
    return (
        <div className={styles['input-container']}>
            <input className={styles['input-field']}
                type={type} 
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default InputField;