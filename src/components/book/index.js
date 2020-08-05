import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const Book = ({ page, _id, imageUrl, title, likes, author, genre }) => {

    title = title.length > 17 ? title.substring(0, 16) + '...' : title;

    return (
        < div key={_id} className={styles[`${page}-book`]} >
            <img className={styles[`book-cover`]} src={imageUrl} alt="Book" />
            <h1>{title}</h1>
            <div className={styles.likes}>Likes: {likes.length}</div>
            <div>Genre: {genre}</div>
            <div>Author: {author}</div>
            <div className={styles.detailsBtn}>
                <Link to={`/book-details/${_id}`}  >
                    <p className={styles.detailsBtnText}>View Details</p>
                </Link>
            </div>
        </div >
    );
}

export default Book;