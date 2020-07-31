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

    onChange(e, type) {
        const newState = {};
        newState[type] = e.target.value;
        this.setState(newState);
    }

    render() {
        const {
            username,
            password
        } = this.state;

        return (
            <PageLayout footer="form">
                <PageTitle text="Login" />
                <form className={styles['login-form']}>
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