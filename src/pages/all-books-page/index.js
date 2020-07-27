import React from 'react';
import Book from '../../components/book';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';

const AllBooksPage = () => {
    return (
        <PageLayout>
            <PageTitle text="All Books"/>
            <Book page="all"/>
        </PageLayout>
    );
}

export default AllBooksPage;