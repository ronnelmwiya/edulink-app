import { FaPlay } from 'react-icons/fa';
import styles from './user-interface.module.css';

const GameCard = ({ imageUrl, gameTitle, gameTag }) => {
    return (
        <div>
            <div className={styles.gameCardContainer}>
                <div className={styles.gameCardItem}>
                    <img src={imageUrl} alt={gameTitle} className={styles.bookCover} />
                    <a className={styles.gameTag}><span>{gameTag}</span></a>
                    <FaPlay size={30} className={styles.playViewIcon}/>
                </div>
            </div>
        </div>
    )
};

export default GameCard;