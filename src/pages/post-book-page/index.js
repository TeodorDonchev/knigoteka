import React, { Component } from 'react';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import InputField from '../../components/input-field';
import Button from '../../components/button';
import styles from './index.module.css';
import UserContext from '../../Context';
import getCookie from '../../utils/cookie-parser';

class PostBookPage extends Component {
    static contextType = UserContext;

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            genre: '',
            opinion: '',
            imageUrl: '',
        }
    }

    validate() {
        const {
            title,
            author,
            genre,
            opinion
        } = this.state;

        const errors = [];

        // if (username.length < 3) {
        //     errors.push('Username must be atleast 3 charecters');
        // }
        // if (password.length < 6) {
        //     errors.push('Password must be atleast 6 characters');
        // }
        // if (password !== confirmPassword) {
        //     errors.push('Passwords don\'t match');
        // }

        // if (errors.length > 0) {
        //     this.setState({ errors });
        //     return true;
        // }

        return false;
    }

    onChange = (e, type) => {
        const newState = {};
        newState[type] = e.target.value;
        this.setState(newState);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {
            title,
            author,
            genre,
            opinion,
            imageUrl
        } = this.state;

        fetch('http://localhost:9999/api/book', {
            method: 'POST',
            body: JSON.stringify({
                title,
                author,
                genre,
                opinion,
                imageUrl
            }),
            headers: {
                'Content-Type': 'application/json',
                'Auth': getCookie('x-auth-token')
            }
        }).then(response => {
            if (response) {

            }
            return response.json();
        }).then(result => {
            this.props.history.push('/all-books');

        })
    }

    render() {
        const {
            title,
            author,
            genre,
            opinion,
            imageUrl
        } = this.state;
        return (
            <PageLayout footer="form">
                <form className={styles['book-form']} onSubmit={this.onSubmit}>
                <PageTitle text="Post Book" />
                    <div className={styles['input-field']}>
                        <InputField
                            type="text"
                            name="title"
                            value={title}
                            placeholder="Title"
                            onChange={(e) => this.onChange(e, 'title')}
                        />
                    </div>

                    <div className={styles['input-field']}>
                        <InputField
                            type="text"
                            name="author"
                            value={author}
                            placeholder="Author"
                            onChange={(e) => this.onChange(e, 'author')}
                        />
                    </div>

                    <div className={styles['input-field']}>
                        <InputField
                            type="text"
                            name="genre"
                            value={genre}
                            placeholder="Genre"
                            onChange={(e) => this.onChange(e, 'genre')}
                        />
                    </div>

                    <div className={styles['input-field']}>
                        <textarea
                            name="opinion"
                            placeholder="Your opinion on the book..."
                            value={opinion}
                            onChange={(e) => this.onChange(e, 'opinion')}
                            className={styles.opinion}
                        />
                    </div>

                    <div className={styles['input-field']}>
                        <InputField
                            type="text"
                            name="imageUrl"
                            value={imageUrl}
                            placeholder="Image url"
                            onChange={(e) => this.onChange(e, 'imageUrl')}
                        />
                    </div>

                    <div className={styles.submit}>
                        <Button text="Post" type="submit"/>
                    </div>

                </form >
            </PageLayout >
        );
    }
}

export default PostBookPage;