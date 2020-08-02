import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/';
import AllBooksPage from './pages/all-books-page';
import RegisterPage from './pages/register-page/';
import LoginPage from './pages/login-page';
import UserContext from './Context';
import ProfilePage from './pages/profile-page';

class Navigation extends Component {
    static contextType = UserContext;

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/all-books" component={AllBooksPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/profile/:id" component={ProfilePage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigation;