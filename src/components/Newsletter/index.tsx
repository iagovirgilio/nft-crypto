import type { NextPage } from 'next';
import styles from "./styles.module.scss";


const Newsletter: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.newsletter}>
                <img className={styles.maskGroupIcon} alt="" src="./Mask group.png" />
                <form className={styles.formNewsletter}>
                    <div className={styles.subscribeToOur }>Subscribe to Our Newsletter</div>
                    <div className={styles.text2Newsletter }>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className={styles.inputGroup}>
                        <input
                            className={styles.inputNewsletter}
                            type="text"
                            placeholder="Type your email"
                        />
                        <button className={styles.buttonNewsletter} type="submit">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
