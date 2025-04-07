'use client';
import { FaBell } from 'react-icons/fa';
import styles from '../styles/notification.module.css';

const Notifications = () => {
    return (
        <div className={styles.notificationContainer}>
            <div>
                <FaBell size={24} color='white' />
            </div>          
        </div>
    );
};

export default Notifications;