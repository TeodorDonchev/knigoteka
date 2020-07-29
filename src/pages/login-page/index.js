import React from 'react';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import InputField from '../../components/input-field';
import MainButton from '../../components/main-button';
import styles from './index.module.css';

function LoginPage() {
    return (
        <PageLayout footer="form">
            <PageTitle text="Login" />
            <div className={styles['login-form']}>
                <InputField type="text" name="username" placeholder="Username" />
                <InputField type="password" name="password" placeholder="Password" />
            </div>
            <MainButton text="Login"/>
        </PageLayout>
    );
}

export default LoginPage;