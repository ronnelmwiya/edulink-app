'use client';

import styles from './navigation.module.css';

const GamesNav = () => {
    return (
        <div>
            <div className={styles.dropDownContainer}>
                <div>
                    <h1>Topics</h1>
                    <a href="/mental-health">Mental Health</a>
                </div>
                <div>
                    <h1>Genres</h1>
                    <a href="/fiction">Fiction</a>
                </div>
            </div>
        </div>
    )
}

export default GamesNav;