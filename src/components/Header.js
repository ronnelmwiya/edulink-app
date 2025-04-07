'use client';
import { useRouter } from 'next/navigation';
import Navigation from './Navigation.js';
import Notifications from './Notifications.js';
import styles from '../styles/header.module.css';

const Header = () => {
    const router = useRouter();
    const toggleHome = () => {
        router.push('/home');
    }
    return (
        <div className={styles.header}>
            <Navigation />
            <img src="logo.png" alt="logo" onClick={toggleHome} />
            <Notifications />
        </div>
    )
}

export default Header;