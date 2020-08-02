import React, { Component } from 'react';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import InputField from '../../components/input-field';
import SubmitButton from '../../components/submit-button';
import styles from './index.module.css';
import UserContext from '../../Context';

class LoginPage extends Component {

    static contextType = UserContext;

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
            const token = response.headers.get('auth');
            console.log('response', response)
            if (token) {
                //validation
            }
            document.cookie = `x-auth-token=${token}`;
            return response.json();
        }).then(result => {
            if (result.username) {
                const user = {
                    _id: result._id,
                    username: result.username,
                    books: result.books,
                };
                this.context.login(user);
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
                <form className={styles['login-form']} onSubmit={this.onSubmit}>
                    <PageTitle text="Login" />
                    <div className={styles['input-field']}>
                        <InputField
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Username"
                            onChange={(e) => this.onChange(e, 'username')}
                        />
                    </div>

                    <div className={styles['input-field']}>
                        <InputField
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => this.onChange(e, 'password')}
                            className={styles['input-field']}
                        />
                    </div>
                    <div className={styles.submit}>
                        <SubmitButton text="Login"/>
                    </div>
                </form>
            </PageLayout>
        );
    }
}

export default LoginPage;