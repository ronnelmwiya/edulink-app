import Header from './components/layout/header.js';
import Footer from './components/layout/footer.js';
import MainGameCard from './components/user-interface/mainGameCard.js';
import GameCard from './components/user-interface/gameCard.js';
import DetailedGameCard from './components/user-interface/detailedGameCard.js';
import CategoryCard from './components/user-interface/categoryCard.js';
import styles from './styles/home.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.homeContainer}>
        <Header />
        <div className={styles.mainContent}>
          <div className={styles.section}>
            <h1 className={styles.heading}>Hot Topics</h1>
            <MainGameCard imageUrl={"banner.png"} gameTitle={"Example"} gameDescription={"This is a summary about Example"} />
          </div>
          <div className={styles.section}>
            <h1 className={styles.heading}>Top Rated</h1>
            <GameCard imageUrl={"story.png"} gameTitle={"Example"} gameTag={"example"} />
          </div>
          <div className={styles.section}>
            <h1 className={styles.heading}>Editor's Choice</h1>
            <DetailedGameCard imageUrl={"story.png"} gameTitle={"Example"} gameTage={"example"} gameSummary={"This is a summary about Example."} />
          </div>
          <div className={styles.section}>
            <h1 className={styles.heading}>Most Plays</h1>  
            <GameCard imageUrl={"story.png"} gameTitle={"Example"} gameTag={"example"}/>
          </div>
          <div>
            <h1 className={styles.heading}>New Arrivals</h1>   
            <GameCard imageUrl={"story.png"} gameTitle={"Example"} gameTag={"example"} />   
          </div>
          <div>
            <h1 className={styles.heading}>Spotlight</h1>
            <DetailedGameCard imageUrl={"story.png"} gameTitle={"Example"} gameTag={"example"} gameSummary={"This is a summary about Example."} />
          </div>
          <div>
            <h1 className={styles.heading}>Most Popular</h1>
            <GameCard imageUrl={"story.png"} gameTitle={"Example"} gameTag={"example"} />
          </div>
          <div>
            <h1 className={styles.heading}>Recommended</h1>
            <GameCard imageUrl={'story.png'} gameTitle={"Example"} gameTag={"example"} />
          </div>
          <div>
            <h1 className={styles.heading}>Categories</h1>
            <CategoryCard imageUrl={"story.png"} category={"Example"} />
          </div>
        </div>
        <Footer />        
      </div>
    </div>
  );
}
