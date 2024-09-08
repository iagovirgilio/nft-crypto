import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftSide}>
                    <div className={styles.logo}>
                        <a href="/">
                            <img alt="" src="./logofooter.png" />
                        </a>
                    </div>
                    <div className={styles.inforFooter}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className={styles.socialMedia}>
                        <a href="#">
                            <img alt="" src="./twitter.png" />
                        </a>
                        <a href="#">
                            <img alt="" src="./instagram.png" />
                        </a>
                        <a href="#">
                            <img alt="" src="./linkedin.png" />
                        </a>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.links}>
                        <h3>Crypto®</h3>
                        <ul>
                            <li>
                                <a href="#">Download</a>
                            </li>
                            <li>
                                <a href="#">NFTs</a>
                            </li>
                            <li>
                                <a href="#">Rank</a>
                            </li>
                            <li>
                                <a href="#">Newsletter</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.linksImportants}>
                        <h3>Important links</h3>
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Questions</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Legal</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.semiCirculoFooter}></div>
        </div>
    )
}

export default Footer
