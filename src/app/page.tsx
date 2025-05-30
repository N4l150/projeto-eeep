// import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Cursos from "./components/Cursos";
import Aprovacoes from "./components/Aprovacoes"; 
import Noticias from "./components/Noticias";
import Slidao from "./components/Slidao";

export default function Home() {
  return (
    <>
        <Header/>
        <Slidao/>
        <Cursos/>
        <Noticias/>
        <Aprovacoes/>
        <Team/>
        <Footer/>
    </>
  );
  
}
