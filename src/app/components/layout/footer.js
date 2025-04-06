import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './layout.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <nav className={styles.footerNav}>
                    <a href="/about" className={styles.footerLink}>About</a>
                    <a href="/contact" className={styles.footerLink}>Contact</a>
                    <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
                    <a href="/terms" className={styles.footerLink}>Terms of Service</a>
                </nav>
                <div className={styles.socialMedia}>
                    <a href="https://facebook.com" className={styles.socialIcon}><FaFacebook /></a>
                    <a href="https://x.com" className={styles.socialIcon}><FaTwitter /></a>
                    <a href="https://instagram.com" className={styles.socialIcon}><FaInstagram /></a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <img src="logoAlt.png" className={styles.logo} />
                <h1 className={styles.copyright}>All rights reserved.</h1>
            </div>
        </footer>
    );
};

export default Footer;