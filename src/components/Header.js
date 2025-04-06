'use client';
import Navigation from './Navigation.js';
import Notifications from './Notifications.js';
import styles from '../styles/header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <Navigation />
            <img src="logo.png" alt="logo" />
            <Notifications />
        </div>
    )
}

export default Header;