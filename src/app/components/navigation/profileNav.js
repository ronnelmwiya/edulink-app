'use client';

import styles from './navigation.module.css';
import { auth } from '../firebase/firebase.js';
import { signOut } from  'firebase/auth';

const ProfileNav = () => {

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error logging out.', error);
        }
    }

    return (
        <div>
            <div className={`${styles.dropDownContainer} ${styles.profileDropDown}`}>
                <a href="/user-profile" className={styles.navLink}>My Profile</a>
                <a href="/inbox" className={styles.navLink}>Inbox</a>
                <a href="/notifications" className={styles.navLink}>Notifications</a>
                <a href="/library" className={styles.navLink}>Library</a>
                <a href="/language" className={styles.navLink}>Language</a>
                <a href="/help" className={styles.navLink}>Help</a>
                <a href="/settings" className={styles.navLink}>Settings</a>
                <button className={styles.navLink} onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default ProfileNav;
