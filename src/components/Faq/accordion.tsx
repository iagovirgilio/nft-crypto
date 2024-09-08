import type { NextPage } from 'next';
import styles from './acordion.module.scss';


const Accordion: NextPage = () => {
    return (
        <div className={styles.accordion}>
            <div className={styles.accordionRow}>
                <div className={styles.header}>
                    <b className={styles.whatIsA}>What is a non-fungible token (NFT)?</b>
                    <img className={styles.linedownIcon} alt="" src="downw.png" />
                </div>
            </div>
            <div className={styles.accordionRow}>
                <div className={styles.header}>
                    <b className={styles.whatIsA}>How do I buy an NFT?</b>
                    <img className={styles.linedownIcon} alt="" src="downw.png" />
                </div>
            </div>
            <div className={styles.accordionRow}>
                <div className={styles.header}>
                    <b className={styles.whatIsA}>What is Crypto® NFT Marketplace?</b>
                    <img className={styles.linedownIcon} alt="" src="downw.png" />
                </div>
            </div>
            <div className={styles.accordionRow}>
                <div className={styles.header}>
                    <b className={styles.whatIsA}>How do I sell an NFT?</b>
                    <img className={styles.linedownIcon} alt="" src="downw.png" />
                </div>
            </div>
        </div>
    );
};

export default Accordion;
