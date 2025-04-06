'use client';

import { FaStream } from 'react-icons/fa';
import styles from './navigation.module.css';

const FeedNav = () => {
    return (
        <div>
            <div className={styles.feedLinkContainer}>
                <FaStream /><a href="/feed">Feed</a>
            </div>
        </div>
    )
}

export default FeedNav;