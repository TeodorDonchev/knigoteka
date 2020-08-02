import React, { Component } from 'react';
import PageLayout from '../../components/page-layout';
import UserContext from '../../Context';
import Book from '../../components/book';
import styles from './index.module.css';

class ProfilePage extends Component {
    static contextType = UserContext;

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            books: []
        }
    }

    getUser = async () => {
        const id = this.props.match.params.id;
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);
        const user = await response.json();
        this.setState({
            ...user
        });
    }

    componentDidMount() {
        this.getUser();
    }

    render() {
        const {
            username,
            books
        } = this.state;

        const booksLength = books.length;
        const likes = books.map(book => book.likes.length).reduce((a, b) => a + b, 0);

        console.log('state ', this.state);
        return (
            <PageLayout footer="normal">
                <div className={styles.card}>
                    <h1>{username}</h1>
                    <p className={styles.title}>Books Posted: {booksLength}</p>
                    <p className={styles.title}>Likes Aquired: {likes}</p>
                    <h2>All Books Posted by You</h2>
                    <div className={styles[`book-container`]}>
                        {books.map(book => {
                            return (
                                <Book key={book._id} page="all" {...book} />
                            );
                        })}
                    </div>
                    <p><button className={styles['card-button']}>Change Profile Information</button></p>
                </div>

            </PageLayout >
        )
    }
}

export default ProfilePage;