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
                            <img src="CardNFT01.png" alt="" />
                        </div>
                        <div className={styles.cardInfo}>
                            <div className={styles.bottomLeft}>
                                <img src="/Avatar1.png" alt="Avatar Owner" />
                                <div className={styles.owner}>
                                    <span>Owned by</span>
                                    <h3>Hacker</h3>
                                </div>
                            </div>
                            <div className={styles.bottomRight}>
                                <small>2.432,21$</small>
                                <span>1.2 ETH</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src="CardNFT02.png" alt="" />
                        </div>
                        <div className={styles.cardInfo}>
                            <div className={styles.bottomLeft}>
                                <img src="/Avatar2.png" alt="Avatar Owner" />
                                <div className={styles.owner}>
                                    <span>Owned by</span>
                                    <h3>Hacker</h3>
                                </div>
                            </div>
                            <div className={styles.bottomRight}>
                                <small>2.432,21$</small>
                                <span>1.2 ETH</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src="CardNFT03.png" alt="" />
                        </div>
                        <div className={styles.cardInfo}>
                            <div className={styles.bottomLeft}>
                                <img src="/Avatar3.png" alt="Avatar Owner" />
                                <div className={styles.owner}>
                                    <span>Owned by</span>
                                    <h3>Hacker</h3>
                                </div>
                            </div>
                            <div className={styles.bottomRight}>
                                <small>2.432,21$</small>
                                <span>1.2 ETH</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src="CardNFT04.png" alt="" />
                        </div>
                        <div className={styles.cardInfo}>
                            <div className={styles.bottomLeft}>
                                <img src="/Avatar4.png" alt="Avatar Owner" />
                                <div className={styles.owner}>
                                    <span>Owned by</span>
                                    <h3>Hacker</h3>
                                </div>
                            </div>
                            <div className={styles.bottomRight}>
                                <small>2.432,21$</small>
                                <span>1.2 ETH</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src="CardNFT01.png" alt="" />
                        </div>
                        <div className={styles.cardInfo}>
                            <div className={styles.bottomLeft}>
                                <img src="/Avatar1.png" alt="Avatar Owner" />
                                <div className={styles.owner}>
                                    <span>Owned by</span>
                                    <h3>Hacker</h3>
                                </div>
                            </div>
                            <div className={styles.bottomRight}>
                                <small>2.432,21$</small>
                                <span>1.2 ETH</span>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    )
}

export default CardsNfts
