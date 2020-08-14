import React, { Component } from 'react';
import Book from '../../components/book';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import styles from './index.module.css';
import AlertMsg from '../../components/alert-msg';

class AllBooksPage extends Component {
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

    renderBooks() {
        let {
            books
        } = this.state;

        books.sort((a, b) => b.likes.length - a.likes.length);

        if (books.length === 0) {
            return (
                <AlertMsg text="Sorry, there aren't any posted books at the moment" type="no-data"/>
            );
        }

        return (
            <div className={styles[`book-container`]}>
                {books.map(book => {
                    return (
                        <Book key={book._id} page="all" {...book} />
                    );
                })}
            </div>
        );
    }

    componentDidMount() {
        this.getBooks();
    }

    render() {
        let {
            books
        } = this.state;

        const footerType = books.length > 0 ? 'normal' : 'form';

        return (
            <PageLayout footer={footerType}>
                <PageTitle text="All Posted Books" />
                {this.renderBooks()}
            </PageLayout>
        );
    }
}

export default AllBooksPage;