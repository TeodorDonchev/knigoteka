import React from 'react';
import styles from './index.module.css';
import booksImg from '../images/aboutBooks.png';

const About = ({ text }) => {
    return (
        <div className={styles.about}>
            <img className={styles.bookImg} src={booksImg} alt="books"/>
            <h4 >{text}</h4>
        </div>
    );
}

export default About;