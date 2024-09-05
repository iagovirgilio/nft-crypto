import styles from "./styles.module.scss";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.etherium}>
                <img src="/Etherium-1.png" alt="" />
            </div>
            <div className={styles.etherium}>
                <img src="/Etherium-2.png" alt="" />
            </div>
            <div className={styles.etherium}>
                <img src="/Etherium-3.png" alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <h1>
                        O maior
                        Marketplace de
                        NFTs do Brasil
                    </h1>
                    <div className={styles.buttons}>
                        <a href="#">
                            <img src="/Badge.svg" alt="" />
                        </a>
                        <a href="#">
                            <img src="/Badge2.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <img src="/Flooting.png" alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
