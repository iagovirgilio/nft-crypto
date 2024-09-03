import Header from "@/components/Header";
import Hero from "@/components/Hero";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.semiCirculo}></div>
      <Header />
      <Hero />
    </div>
  );
}
