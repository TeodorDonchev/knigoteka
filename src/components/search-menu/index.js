import React, { Component } from 'react';
import styles from './index.module.css';

class SearchMenu extends Component {

    render() {
        return (
            <div className={styles.container}>
                    <div className={styles['inner-container']}>
                        Search by title:  <input className={styles['search-input']} />
                    </div>

                    <div className={styles['inner-container']}>
                        Filter by:
                        <select className={styles.options}>
                            <option value="likes">Likes</option>
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                            <option value="username">Username</option>
                        </select>
                    </div>
                    <div className={styles['inner-container']}>
                      <button className={styles.close}>X</button>
                    </div>
            </div>
        )
    }
}

export default SearchMenu;