'use client';

import styles from './navigation.module.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div>
            <div className={styles.searchBar}>
                <FaSearch className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                />
            </div>
        </div>
    )
}

export default SearchBar;