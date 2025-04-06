import { FaPlay } from 'react-icons/fa';
import styles from './user-interface.module.css';

const DetailedGameCard = ({ imageUrl, gameTitle, gameTag, gameSummary}) => {
    return (
        <div>
            <div className={styles.detailedGameCardContainer}>
                <div className={styles.detailedGameCardItem}>
                    <div className={styles.detailedCardImage}>
                        <img src={imageUrl} alt={gameTitle} />
                    </div>
                    <div className={styles.detailedCardDetails}>
                        <div className={styles.gameSummary}>
                            <p>{gameSummary}</p>
                        </div>
                        <div className={styles.cardIcons}>
                            <FaPlay className={styles.playViewIcon}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default DetailedGameCard;