import styles from './user-interface.module.css';

const MainGameCard = ({ imageUrl, gameTitle, gameDescription }) => {
    
    return(
        <div>
            <div className={styles.cardContainer}>
                <div className={styles.cardDescription}>
                    <p>{gameDescription}</p>
                </div>
                <div className={styles.cardImage}>
                    <img src={imageUrl} alt={gameTitle}/>
                </div>
            </div>
        </div>
    )
}

export default MainGameCard;