import styles from "./styles.module.scss";
import Accordion from "./accordion";

const Faq = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.topBar}>
                    <h3>FAQ</h3>
                </div>
                <Accordion />
            </div>
        </div>
    )
}

export default Faq
