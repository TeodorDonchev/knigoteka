import React, { Component } from 'react';
import styles from './index.module.css';

class Book extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: []
        }
    }

    getBooks = async () => {
        const response = await fetch('http://localhost:9999/api/book');
        const books = await response.json();
        this.setState({
            books
        });
    }

    componentDidMount() {
        this.getBooks();
    }

    render() {
        let {
            books
        } = this.state;
        console.log(this.state.books);

        books.sort((a, b) => b.likes.length - a.likes.length);

        if (this.props.page === 'home') {
           books = books.slice(0, 3);
        }

        return (
            <div className={styles[`${this.props.page}-book-container`]}>
                {books.map(book => {
                    return (
                        <div key={book._id} className={styles[`${this.props.page}-book`]}>
                            <img className={styles[`book-cover`]} src={book.imageUrl} alt="Book" />
                            <h1>{book.title}</h1>
                            <p className={styles.likes}>Likes: {book.likes.length}</p>
                            <p>Author: {book.author}</p>
                            <p><button>View Details</button></p>
                        </div>
                    );
                })}

            </div>
        );

    }
}

export default Book;