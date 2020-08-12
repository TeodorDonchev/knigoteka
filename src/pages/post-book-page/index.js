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
            loading: false,
            uploaded: false
        }
    }

    validate() {
        // const {
        //     title,
        //     author,
        //     genre,
        //     opinion
        // } = this.state;

        // const errors = [];

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

    imageUpload = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'knigoteka');

        this.setState({
            loading: true
        });

        const res = await fetch('https://api.cloudinary.com/v1_1/teodor/image/upload', {
            method: 'POST',
            body: data
        });

        const file = await res.json();

        if (file) {
            this.setState({
                imageUrl: file.secure_url,
                loading: false,
                uploaded: true
            });
        }
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

    renderUpload() {
        const {
            loading,
            uploaded,
            imageUrl
        } = this.state;

        if (uploaded) {
            return (
                <div className={styles.message}>Cover uploaded.</div>
            )
        }

        if (loading) {
            return (
                <div className={styles.message}>Uploading cover...</div>
            )
        }

        return (
            <div className={styles['input-field']}>
                <InputField
                    type="file"
                    name="imageUrl"
                    value={imageUrl}
                    placeholder="Upload Cover"
                    onChange={this.imageUpload}
                />
            </div>
        )
    }

    render() {
        const {
            title,
            author,
            genre,
            opinion
        } = this.state;
        return (
            <PageLayout footer="form">
                <form className={styles['book-form']} onSubmit={this.onSubmit}>
                    <PageTitle text="Post Book" />
                    
                    {this.renderUpload()}

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


                    <div className={styles.submit}>
                        <Button text="Post" type="submit" />
                    </div>

                </form >
            </PageLayout >
        );
    }
}

export default PostBookPage;