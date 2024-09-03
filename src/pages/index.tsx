import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div style={styles.background}>
        <div style={styles.semiCirculo}></div>
        <Header />
        <Hero />
      </div>
    </>
  );
}

const styles = {
  background: {
    backgroundColor: "#000", // Fundo preto
    height: "100vh",
    overflow: "hidden",
    position: "relative",
  },
  semiCirculo: {
    width: "100vw", // Aumentando a largura
    height: "60vw", // Aumentando a altura
    background: "radial-gradient(circle at bottom, rgba(111, 0, 255, 0.8), rgba(111, 0, 255, 0.5) 30%, rgba(74, 0, 115, 0.3) 60%, rgba(0, 0, 0, 0) 70%)", // Gradiente radial
    borderRadius: "500px 500px 0 0", // Ajustando o semicírculo
    position: "absolute",
    top: "50%", // Posicionando mais ao centro
    left: "50%",
    transform: "translate(-50%, -75%) rotate(180deg)", // Centralizando e rotacionando 180 graus
    opacity: "1", // Opacidade completa
  }
}
