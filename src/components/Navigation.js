'use client';
import { FaBars } from 'react-icons/fa';
import styles from './components.module.css';

const Navigation = () => {
    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <ul className={styles.nav-list}>
                    <li className={styles.nav-item}><a href="/profile">My Profile</a></li>
                    <li className={styles.nav-item}><a href="/courses">My Courses</a></li>
                    <li className={styles.nav-item}><a href="/favourites">Favourite Courses</a></li>
                    <li className={styles.nav-item}><a href="/notifications">Notifications</a></li>
                    <li className={styles.nav-item}><a href="/downloads">Downloads</a></li>
                    <li className={styles.nav-item}><a href="/support">Customer Support</a></li>
                    <li className={styles.nav-item}><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;