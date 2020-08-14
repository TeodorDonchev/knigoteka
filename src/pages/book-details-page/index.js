import React, { Component } from 'react';
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import PageTitle from '../../components/title';
import Button from '../../components/button';
import UserContext from '../../Context';
import getCookie from '../../utils/cookie-parser';

class BookDetailsPage extends Component {
    static contextType = UserContext;

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            genre: '',
            opinion: '',
            imageUrl: '',
            publishedBy: '',
            deleteClick: false,
            likes: []
        }
    }

    likedOrNot = () => {
        const {
            likes
        } = this.state;

        const {
            username
        } = this.context.user;

        let likedAlready = false;

        likes.forEach(like => {
            if (like.username === username) {
                likedAlready = true;
            }
        })

        return likedAlready;
    }

    getBook = async () => {
        const id = this.props.match.params.id;
        const response = await fetch(`http://localhost:9999/api/book/details/?id=${id}`);
        const book = await response.json();
        this.setState({
            ...book
        });
    }

    renderLikes() {
        const {
            likes
        } = this.state;

        if (likes.length === 0) {
            return (
                <p className={styles.likes}>no one yet.</p>
            )
        }

        let moreLikes = '';

        if (likes.length > 1) {
            moreLikes = ` and ${likes.length - 1} more.`;
        }

        return (
            likes.reverse().slice(0, 1).map((like) => {
                return (
                    <p key={like._id} className={styles.likes}>{like.username}{moreLikes}</p>
                );
            })
        );
    }

    like = () => {
        const id = this.props.match.params.id;;
        fetch(`http://localhost:9999/api/book/like/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Auth': getCookie('x-auth-token')
            }
        }).then(response => {
            return response.json();
        }).then(result => {
            if (result) {
                this.setState({
                    likes: result.likes
                })
            }
        })
    }

    edit = () => {
        this.props.history.push(`/edit-book/${this.props.match.params.id}`)
    }

    delete = () => {
        this.setState({
            deleteClick: true
        });
    }

    deleteConfirmed = () => {
        const id = this.props.match.params.id;;
        fetch(`http://localhost:9999/api/book/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Auth': getCookie('x-auth-token')
            }
        }).then(response => {
            return response.json();
        }).then(result => {
           if(result) {
               this.props.history.push('/all-books');
           }
        })
    }

    renderButtons() {
        const {
            publishedBy,
            deleteClick
        } = this.state;

        if (this.context.logged) {
            const {
                username
            } = this.context.user;

            if (publishedBy.username !== username) {

                const likedAlready = this.likedOrNot();

                if (likedAlready) {
                    return (
                        <div className={styles.liked}>You liked this book.</div>
                    );
                }

                return (
                    <div className={styles['button-container']}>
                        <Button text="Like" onClick={this.like} type="detail" />
                    </div>
                );
            }
            return (
                <div className={styles['button-container']}>
                    <Button text="Edit" onClick={this.edit} type="detail" />
                    {deleteClick
                        ?
                        <Button text="Click again" onClick={this.deleteConfirmed} type="detail" />
                        :
                        <Button text="Delete" onClick={this.delete} type="detail" />}
                </div>
            );

        }


    }

    componentDidMount() {
        this.getBook();
    }


    render() {
        const {
            title,
            author,
            genre,
            opinion,
            imageUrl,
            publishedBy
        } = this.state;

        return (
            <PageLayout footer="form">
                <PageTitle text="Book Details" />
                < div className={styles[`book-container`]} >

                    <div className={styles['img-container']}>
                        <img className={styles[`book-cover`]} src={imageUrl} alt="Book" />
                    </div>

                    <div className={styles['data-container']}>
                        <h1>{title}</h1>
                        <p className={styles.likes}>Liked by: {this.renderLikes()}</p>
                        <div className={styles['detail-buttons']}>{this.renderButtons()}</div>
                        <div className={styles.field}>Posted By: {publishedBy.username}</div>
                        <div className={styles.field}>Genre: {genre}</div>
                        <div className={styles.field}>Author: {author}</div>
                        <div className={styles['opinion-title']}>{publishedBy.username}'s opinion on the book:</div>
                        <textarea className={styles.opinion} value={opinion} readOnly />
                    </div>
                </div >
            </PageLayout>
        )
    }
}

export default BookDetailsPage;