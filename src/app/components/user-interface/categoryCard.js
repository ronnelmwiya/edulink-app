import styles from './user-interface.module.css';

const CategoryCard = ({ imageUrl, category }) => {
    return (
        <div>
            <div className={styles.categoryCardContainer}>
                <div className={styles.categoryCardItem}>
                    <img src={imageUrl} alt={category} />
                    <span>{category}</span>
                </div>
            </div>
        </div>
    )
};

export default CategoryCard;