import React, { Component } from 'react';
import UserContext from './Context';


class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logged: false,
            user: null
        };
    }

    login = (user) => {
        this.setState({
            logged: true,
            user
        });
    }

    logout = () => {
        this.setState({
            logged: false,
            user: null
        });
    }

    render() {
        const {
            logged,
            user
        } = this.state;

        return (
            <UserContext.Provider value={{
                logged,
                user,
                login: this.login,
                logout: this.logout
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default Auth;