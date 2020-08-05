import React, { Component } from 'react';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
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

    AnyBooks = () => {
        if (this.state.books.length > 0) {
            return (
                <div>
                    <h2>All Books Posted by You</h2>
                    <div className={styles[`book-container`]}>
                        {this.state.books.map(book => {
                            return (
                                <Book key={book._id} page="all" {...book} />
                            );
                        })}
                    </div>
                </div>
            );
        }

        return (
            <h2>You have not posted any books yet.</h2>
        );
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
        const footerType = books.length > 0 ? 'normal' : 'form';

        return (
            <PageLayout footer={footerType}>
                <PageTitle text="Profile" />
                <div className={styles.card}>
                    <h1>{username}</h1>
                    <p className={styles.title}>Books Posted: {booksLength}</p>
                    <p className={styles.title}>Likes Aquired: {likes}</p>
                    <p><button className={styles['card-button']}>Change username</button></p>
                    <p><button className={styles['card-button']}>Change password</button></p>
                </div>
                {this.AnyBooks()}

            </PageLayout >
        )
    }
}

export default ProfilePage;