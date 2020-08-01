import React, { Component } from 'react';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import InputField from '../../components/input-field';
import SubmitButton from '../../components/submit-button';
import styles from './index.module.css';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        }
    }

    onChange(e, type){
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

        fetch('http://localhost:9999/api/user/register', {
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
            password,
            confirmPassword
        } = this.state;

        return (
            <PageLayout footer="form">
                <PageTitle text="Create your account" />
                <form className={styles['register-form']} onSubmit={this.onSubmit}>
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
                    <InputField
                        type="password"
                        name="rePassword"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={(e) => this.onChange(e, 'confirmPassword')}
                    />
                    <SubmitButton text="Sign Up" />
                </form>
            </PageLayout>
        );
    }

}

export default RegisterPage;