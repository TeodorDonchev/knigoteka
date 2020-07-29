import React from 'react';
import PageLayout from '../../components/page-layout';
import PageTitle from '../../components/title';
import InputField from '../../components/input-field';
import MainButton from '../../components/main-button';
import styles from './index.module.css';

function RegisterPage() {
    return (
        <PageLayout>
            <PageTitle text="Create your account" />
            <div className={styles['register-form']}>
                <InputField type="text" name="username" placeholder="Username" />
                <InputField type="password" name="password" placeholder="Password" />
                <InputField type="password" name="rePassword" placeholder="Confirm Password" />
            </div>
            <MainButton text="Sign Up"/>
        </PageLayout>
    );
}

export default RegisterPage;