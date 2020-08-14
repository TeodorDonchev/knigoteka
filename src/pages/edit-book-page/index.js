import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PageTitle from '../../components/title'
import PageLayout from '../../components/page-layout'
import InputField from '../../components/input-field'
import AlertMsg from '../../components/alert-msg'
import Button from '../../components/button'
import styles from '../post-book-page/index.module.css';
import validateBook from '../../utils/book-validator'
import getCookie from '../../utils/cookie-parser'

const EditBookPage = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [opinion, setOpinion] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const params = useParams();
    const history = useHistory();

    const getBook = useCallback(async () => {
        const id = params.id;
        const response = await fetch(`http://localhost:9999/api/book/details/?id=${id}`);
        if (response.status === 500) {
            history.push('/');
        }
        const book = await response.json();

        setTitle(book.title);
        setAuthor(book.author);
        setGenre(book.genre);
        setOpinion(book.opinion);
        setImageUrl(book.imageUrl);
    }, [params.id, history]);

    const onSubmit = (e) => {
        e.preventDefault();

        const bookErrors = validateBook(title, author, genre, opinion, imageUrl);

        if (bookErrors.length > 0) {
            setErrors(bookErrors);
            return;
        }

        fetch(`http://localhost:9999/api/book/${params.id}`, {
            method: 'PUT',
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
            history.push(`/book-details/${params.id}`);
        })
    }

    const imageUpload = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'knigoteka');

        setLoading(true);

        const res = await fetch('https://api.cloudinary.com/v1_1/teodor/image/upload', {
            method: 'POST',
            body: data
        });

        const file = await res.json();

        if (file) {
            setImageUrl(file.secure_url);
            setLoading(false);
            setUploaded(true);
        }
    }

    const renderUpload = () => {

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
                    placeholder="Upload New Cover"
                    onChange={imageUpload}
                />
            </div>
        )
    }

    useEffect(() => {
        getBook();
    }, [getBook]);

    return (
        <PageLayout footer="form">
            <form className={styles['book-form']} onSubmit={onSubmit}>
                <PageTitle text="Edit Book" />

                {renderUpload()}

                <div className={styles['input-field']}>
                    <InputField
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className={styles['input-field']}>
                    <InputField
                        type="text"
                        name="author"
                        value={author}
                        placeholder="Author"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <div className={styles['input-field']}>
                    <InputField
                        type="text"
                        name="genre"
                        value={genre}
                        placeholder="Genre"
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </div>


                <div className={styles['input-field']}>
                    <textarea
                        name="opinion"
                        placeholder="Your opinion on the book..."
                        value={opinion}
                        onChange={(e) => setOpinion(e.target.value)}
                        className={styles.opinion}
                    />
                </div>

                {errors.map(error => (
                    <AlertMsg key={error} text={error} type="error" />
                ))}

                <div className={styles.submit}>
                    <Button text="Save" type="submit" />
                </div>

            </form >
        </PageLayout >
    );
}

export default EditBookPage;