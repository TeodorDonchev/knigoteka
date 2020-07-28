import React, { Component } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

class Aside extends Component {

    render() {
        return (
            <div className={styles.container}>
                <aside>
                    <div className={styles['inner-container']}>
                        <Link to="/add-book" className={styles['add-book']}>
                            + Add Book
                        </Link>
                    </div>
                </aside>
            </div>
        )
    }
}

export default Aside;