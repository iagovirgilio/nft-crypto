import styles from "./styles.module.scss";

const CardsNfts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.topBar}>
                    <div className={styles.leftSide}>
                        <span>Trending</span>
                        <h3>Popular Artwork</h3>
                    </div>
                    <div className={styles.rightSide}>
                        <span>All</span>
                        <span>Cyberpunk</span>
                        <span>3D</span>
                        <span>Video</span>
                        <span>GIF</span>
                        <span>AI Art</span>
                    </div>
                </div>
                <div className={styles.cardsContent}>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src="/" alt="" />
                        </div>
                        <div className={styles.cardInfo}>
                            <div className={styles.bottomLeft}>
                                <img src="/crypto.svg" alt="Crypto" />
                                <div className={styles.owner}>
                                    <span>Owned by</span>
                                    <h3>Hacker</h3>
                                </div>
                            </div>
                            <div className={styles.bottomRight}>
                                <span>20% OFF</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsNfts
