import React from 'react';
import styles from './index.module.css';

const Book = ({ page, _id, imageUrl, title, likes, author }) => {
    return (
        < div key={_id} className={styles[`${page}-book`]} >
            <img className={styles[`book-cover`]} src={imageUrl} alt="Book" />
            <h1>{title}</h1>
            <p className={styles.likes}>Likes: {likes.length}</p>
            <p>Author: {author}</p>
            <p><button>View Details</button></p>
        </div >
    );
}

export default Book;