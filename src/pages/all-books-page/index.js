import React from 'react';
import Book from '../../components/book';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import MainButton from '../../components/main-button';
import styles from './index.module.css';

const AllBooksPage = () => {
    return (
        <PageLayout>
            <PageTitle text="All Books"/>
            <div className={styles.container}>
                <MainButton text="+ Add Book"/>
            </div>
            <Book page="all"/>
        </PageLayout>
    );
}

export default AllBooksPage;