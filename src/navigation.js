import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import HomePage from './pages/home-page/';
import AllBooksPage from './pages/all-books-page';
import RegisterPage from './pages/register-page/';

const Navigation = () => {

    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/all-books" component={AllBooksPage} />
            <Route path="/register" component={RegisterPage} />
        </Switch>
    </BrowserRouter>
    );
}

export default Navigation;