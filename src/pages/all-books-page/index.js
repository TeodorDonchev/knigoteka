import React from 'react';
import Book from '../../components/book';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import SearchMenu from '../../components/search-menu';

const AllBooksPage = () => {
    return (
        <PageLayout footer="normal">
            <SearchMenu/>
            <PageTitle text="All Posted Books"/>
            <Book page="all"/>
        </PageLayout>
    );
}

export default AllBooksPage;