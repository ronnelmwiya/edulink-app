'use client';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from '../styles/navigation.module.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <FaBars />
            </div>
            {isOpen && (
                <nav className={styles.navbar}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><a href="/profile">My Profile</a></li>
                        <li className={styles.navItem}><a href="/courses">My Courses</a></li>
                        <li className={styles.navItem}><a href="/favourites">Favourite Courses</a></li>
                        <li className={styles.navItem}><a href="/notifications">Notifications</a></li>
                        <li className={styles.navItem}><a href="/downloads">Downloads</a></li>
                        <li className={styles.navItem}><a href="/support">Customer Support</a></li>
                        <li className={styles.navItem}><a href="/settings">Settings</a></li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Navigation;