import React, { Component } from 'react';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import InputField from '../../components/input-field';
import Button from '../../components/button';
import AlertMsg from '../../components/alert-msg';
import styles from './index.module.css';
import UserContext from '../../Context';
import { withRouter } from 'react-router-dom';


class LoginPage extends Component {

    static contextType = UserContext;

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: []
        };
    }

    validate() {
        const {
            username,
            password
        } = this.state;

        const errors = [];

        if (username.length === 0) {
            errors.push('No username provided');
        }

        if (password.length === 0) {
            errors.push('No password provided');
        }

        if (errors.length > 0) {
            this.setState({ errors });
            return true;
        }

        return false;
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

        const hasErrors = this.validate();

        if (hasErrors) {
            return
        }

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
            if (token) {
                document.cookie = `x-auth-token=${token}`;
            } else {
                this.setState({
                    errors: ['Unauthorized']
                })
            }
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
            password,
            errors
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

                    {errors.map(error => (
                        <AlertMsg key={error} text={error} type="error" />
                    ))}

                    <div className={styles.submit}>
                        <Button text="Login" type="submit" />
                    </div>
                </form>
            </PageLayout>
        );
    }
}

export default withRouter(LoginPage);