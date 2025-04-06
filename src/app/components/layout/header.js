'use client';

import { useState, useEffect, useRef } from 'react';
import { FaUserCircle, FaChevronDown } from 'react-icons/fa';
import { useUser } from '../../context/userContext.js';
import AuthForm from '../forms/authForm.js';
import Modal from '../user-interface/modal.js';
import GamesNav from '../navigation/gamesNav.js';
import CommunityNav from '../navigation/communityNav.js';
import SearchBar from '../navigation/searchBar.js';
import FeedNav from '../navigation/feedNav.js';
import ProfileNav from '../navigation/profileNav.js';
import styles from './layout.module.css';

const Header = () => {
    const { user } = useUser();
    const [openDropdown, setOpenDropdown] = useState('');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const profileRef = useRef(null);
    const gamesRef = useRef(null);
    const communityRef = useRef(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);    
    }

    const toggleDropdown = (dropdown) => {
        console.log(`Toggling dropdown: ${dropdown}`);  // Debugging line
        setOpenDropdown(openDropdown === dropdown ? '' : dropdown);
    };

    const handleClickOutside = (event) => {
        // Check if the click is outside the dropdowns and modal
        if (
            (profileRef.current && !profileRef.current.contains(event.target)) &&
            (gamesRef.current && !gamesRef.current.contains(event.target)) &&
            (communityRef.current && !communityRef.current.contains(event.target))
        ) {
            setOpenDropdown('');
        }
    };

    const onLoginSuccess = () => {
        setOpenDropdown('');
    };

    useEffect(() => {
        setOpenDropdown('');
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logoContainer}>
                    <a href="/"><img src="logo.png" alt="Solace Logo" className={styles.logo} /></a>
                </div>
                <div className={styles.mobileMenuContainer}>
                    <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? 'Close' : 'Menu'}
                    </button>
                    {isMobileMenuOpen && (
                        <div className={styles.mobileMenu}>
                            <SearchBar />
                            <div className={styles.navLink} onClick={() => toggleDropdown('games')} aria-haspopup="true" aria-expanded={openDropdown === 'games'} ref={gamesRef}>
                                <span className={styles.navHeading}><h1>Games</h1><FaChevronDown /></span> 
                                {openDropdown === 'games' && (
                                    <GamesNav />
                                )}                   
                            </div>
                            <div className={styles.navLink} onClick={() => toggleDropdown('community')} aria-haspopup="true" aria-expanded={openDropdown === 'community'} ref={communityRef}>
                                <span className={styles.navHeading}><h1>Community</h1><FaChevronDown /></span>
                                {openDropdown === 'community' && (
                                    <CommunityNav />
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.desktopNav}>
                    <div className={styles.navLink} onClick={() => toggleDropdown('games')} aria-haspopup="true" aria-expanded={openDropdown === 'games'} ref={gamesRef}>
                        <span className={styles.navHeading}><h1>Games</h1><FaChevronDown /></span> 
                        {openDropdown === 'games' && (
                            <GamesNav />
                        )}                   
                    </div>
                    <div className={styles.navLink} onClick={() => toggleDropdown('community')} aria-haspopup="true" aria-expanded={openDropdown === 'community'} ref={communityRef}>
                        <span className={styles.navHeading}><h1>Community</h1><FaChevronDown /></span>
                        {openDropdown === 'community' && (
                            <CommunityNav />
                        )}
                    </div>
                    <SearchBar />
                </div>
            </nav>
            <nav className={`${styles.nav} ${styles.headerBottom}`}>
                <FeedNav />
                
                <div className={styles.profileContainer} onClick={() => toggleDropdown('profile')} aria-haspopup="true" aria-expanded={openDropdown === 'profile'} ref={profileRef}>
                    <FaUserCircle aria-label="User Profile" size={35} className={styles.profileIcon}/>
                    {openDropdown === 'profile' && (
                        <div>
                            {user ? (
                                <ProfileNav />
                            ) : (
                                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                                    <Modal content={<AuthForm onLoginSuccess={onLoginSuccess} />} />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;