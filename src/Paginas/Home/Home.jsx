import { HomeStyle } from "./HomeStyle";
import { Link } from "react-router-dom";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mongodb from "../../assets/svgs/mongodb.svg"
import nodejs from "../../assets/svgs/node-js.svg"
import react from "../../assets/svgs/react.svg"
import express from "../../assets/svgs/express.svg"
import { Footer } from "../../Componentes/Footer/Footer";

const Home = () => {
  return(
    <>
    <HomeStyle>
    <header>
      <div className="Titulo">
      <h1>Lista de Tarefas</h1>
      <h2>Esse é o meu primeiro projeto FullStack</h2>
      </div>
      <Link to="/login" className="BotaoLogin">Login</Link>
    </header>

    <section className="introducao">
      <p>Esse aplicativo foi construido usando diversas tecnologias</p>
      <div>
      <img src={react} alt="Icone react" className="svgIcons"/>      
      <img src={nodejs} alt="Icone nodejs" className="svgIcons"/>      
      <img src={express} alt="Icone express" className="svgIcons"/>
      <img src={mongodb} alt="Icone MongoDB" className="svgIcons"/>
      </div>
    </section>

    <section className="Aplicacao">
      <FontAwesomeIcon icon={faListCheck}/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
    </section>

    <section className="Cadastro">
      <p>Para utilizar o app é necessário possuir um cadastro no banco de dados</p>
      <div>
      <p>Não tem cadastro?</p>
      <Link to="/cadastro">Faça já o seu cadastro</Link>
      </div>
    </section>    
    </HomeStyle>
    <Footer/>
    </>
  )
}

export default Home;