import React from 'react';
import Header from '../header';
import Footer from '../footer';
import styles from './index.module.css';

function PageLayout(props) {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                {props.children}
            </div>
            <Footer type={props.footer} />
        </div>
    );
}

export default PageLayout;