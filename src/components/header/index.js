import React, { Component } from 'react';
import LinkPath from '../link-path';
import styles from './index.module.css';
import logo from '../images/logo-text.png';
import { Link } from 'react-router-dom';
import getLinks from '../../utils/nav-links'
import UserContext from '../../Context'

class Header extends Component {
    static contextType = UserContext;

    render() {
        const {
            logged,
            user
          } = this.context;
      
          const links = getLinks(logged, user);
        return (
            <nav className={styles.navigation}>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="logo" />
                </Link>
                <div className={styles['nav-bar']}>
                    {
                        links.map(link => {
                            return (
                            <LinkPath
                                key={link.title}
                                href={link.href}
                                title={link.title}
                            />
                            )
                        })
                    }
                </div>
            </nav>
        )
    }
}

export default Header;