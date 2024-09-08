import styles from "./styles.module.scss";
// importar font awesome close icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <a href="#">
                            <img src="/logo.webp" alt="logo" />
                        </a>
                    </div>
                    <div className={styles.menuMobile}>
                        <img src="/hamburguer.svg" alt="menu" />
                    </div>
                    <div className={styles.menuMobileItems}>
                        <FontAwesomeIcon
                            icon={faClose}
                            className={styles.closeIcon}
                        />
                        
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
                    <div className={styles.menu}>
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
                </div>
            </div>
        </header>
    );
};

export default Header;
