import React, { Component } from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import PageTitle from '../../components/title';

class BookDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            genre: '',
            description: '',
            imageUrl: '',
            publishedBy: '',
            likes: []
        }
    }

    getBook = async () => {
        const id = this.props.match.params.id;
        const response = await fetch(`http://localhost:9999/api/book/details/?id=${id}`);
        const book = await response.json();
        this.setState({
            ...book
        });
    }

    componentDidMount() {
        this.getBook();
    }

    render() {
        const {
            title,
            author,
            genre,
            description,
            imageUrl,
            publishedBy,
            likes,
        } = this.state;

        return (
            <PageLayout footer="form">
                <PageTitle text="Book Details"/>
                < div className={styles[`book-container`]} >

                    <div className={styles['img-container']}>
                        <img className={styles[`book-cover`]} src={imageUrl} alt="Book" />
                    </div>

                        <div className={styles['data-container']}>
                            <h1>{title}</h1>
                            <p className={styles.likes}>Likes: {likes.length}</p>
                            <div>Author: {author}</div>
                            <div>Genre: {genre}</div>
                            <div>Posted By: {publishedBy.username}</div>
                            <div>{publishedBy.username}'s opinion: {description}</div>
                        </div>
                </div >
            </PageLayout>
        )
    }
}

export default BookDetailsPage;