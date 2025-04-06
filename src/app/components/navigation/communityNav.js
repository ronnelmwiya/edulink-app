'use client';

import styles from './navigation.module.css';

const CommunityNav = () => {
    return (
        <div>
            <div className={styles.dropDownContainer}>
                <a href="/feed">Feed</a>
            </div>
        </div>
    )
}

export default CommunityNav;