import React, { Component } from 'react';
import styles from './index.module.css';
import Book from '../book';

class Books extends Component {

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

        books.sort((a, b) => b.likes.length - a.likes.length);

        if (this.props.page === 'home') {
            books = books.slice(0, 3);
        }

        return (
            <div className={styles[`${this.props.page}-book-container`]}>
                {books.map(book => {
                    return (
                        <Book key={book._id} page={this.props.page} {...book} />
                    );
                })}

            </div>
        );

    }
}

export default Books;