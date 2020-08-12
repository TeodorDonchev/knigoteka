import React from 'react';
import styles from './index.module.css';


const InputField = ({ type, name, value, placeholder, onChange }) => {
    if (type === 'file') {
        return (
            <label htmlFor="file-upload" className={styles['cover-upload']}>
                {placeholder}  
                <input id="file-upload" type={type} name={name} onChange={onChange}/>
            </label>
        )
    }
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