import React from 'react';
import Book from '../../components/book';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import SearchMenu from '../../components/search-menu';
import styles from './index.module.css';

const AllBooksPage = () => {
    return (
        <PageLayout>
            <SearchMenu className={styles.aside}/>
            <PageTitle text="All Books"/>
            <Book page="all"/>
        </PageLayout>
    );
}

export default AllBooksPage;