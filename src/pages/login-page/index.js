import React, { Component } from 'react';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import InputField from '../../components/input-field';
import SubmitButton from '../../components/submit-button';
import styles from './index.module.css';

class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    onChange = (e, type) => {
        const newState = {};
        newState[type] = e.target.value;
        this.setState(newState);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {
            username,
            password
        } = this.state;

        fetch('http://localhost:9999/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            const token = response.headers.get('x-auth-token');
            if (token) {
                
            }
            document.cookie = `x-auth-token=${token}`;
            return response.json();
        }).then(result => {
            if (result.username) {
                this.props.history.push('/');
            }
        })
    }

    render() {
        const {
            username,
            password
        } = this.state;

        return (
            <PageLayout footer="form">
                <PageTitle text="Login" />
                <form className={styles['login-form']} onSubmit={this.onSubmit}>
                    <InputField
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => this.onChange(e, 'username')}
                    />
                    <InputField
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => this.onChange(e, 'password')}
                    />
                    <SubmitButton text="Login" />
                </form>
            </PageLayout>
        );
    }
}

export default LoginPage;