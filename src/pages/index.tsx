import Header from "@/components/Header";
import Hero from "@/components/Hero";
import styles from "./styles.module.scss";
import MovinBars from "@/components/MovinBars";
import CardsNfts from "@/components/CardsNfts";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.semiCirculo}></div>
      <Header />
      <Hero />
      <MovinBars />
      <CardsNfts />
    </div>
  );
}
