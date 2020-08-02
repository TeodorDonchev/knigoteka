import React from 'react';
import Books from '../../components/books';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import SearchMenu from '../../components/search-menu';

const AllBooksPage = () => {
    return (
        <PageLayout footer="normal">
            <SearchMenu/>
            <PageTitle text="All Posted Books"/>
            <Books page="all"/>
        </PageLayout>
    );
}

export default AllBooksPage;