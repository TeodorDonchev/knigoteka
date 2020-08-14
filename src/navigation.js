import React, { useContext } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/home-page/';
import AllBooksPage from './pages/all-books-page';
import RegisterPage from './pages/register-page/';
import LoginPage from './pages/login-page';
import UserContext from './Context';
import ProfilePage from './pages/profile-page';
import PostBookPage from './pages/post-book-page';
import BookDetailsPage from './pages/book-details-page';
import EditBookPage from './pages/edit-book-page';

const Navigation = () => {
    const context = useContext(UserContext);
    const loggedIn = context.user && context.logged;
    console.log(context);
    console.log(loggedIn);
    return (
        <Switch>
           <Route path="/" exact component={HomePage} />
            <Route path="/all-books" component={AllBooksPage} />
            <Route path="/book-details/:id" component={BookDetailsPage} />
            <Route path="/register">
                {loggedIn ? (<Redirect to="/" />) : (<RegisterPage />)}
            </Route>
            <Route path="/login">
                {loggedIn ? (<Redirect to="/" />) : (<LoginPage />)}
            </Route>
            <Route path="/profile/:id" >
                {loggedIn ? (<ProfilePage />) : (<Redirect to="/login" />)}
            </Route>
            <Route path="/post-book">
                {loggedIn ? (<PostBookPage />) : (<Redirect to="/login" />)}
            </Route>
            <Route path="/edit-book/:id">
                {loggedIn ? (<EditBookPage />) : (<Redirect to="/login" />)}
            </Route>
            <Route path="*" component={HomePage} />
        </Switch>
    );
}

export default Navigation;