import React from 'react';
import Header from '../header';
import Footer from '../footer';
import styles from './index.module.css';

function PageLayout(props) {
    return (
        <div className={styles.app}>
            <Header />
                {props.children}
            <Footer/>
        </div>
    );
}

export default PageLayout;