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
      <h1>To Do List</h1>
      <h2>This is my first FullStack project</h2>
      </div>
      <Link to="/login" className="BotaoLogin">Login</Link>
    </header>

    <section className="introducao">
      <p>This application was built using several technologies</p>
      <div>
      <img src={react} alt="Icone react" className="svgIcons"/>      
      <img src={nodejs} alt="Icone nodejs" className="svgIcons"/>      
      <img src={express} alt="Icone express" className="svgIcons"/>
      <img src={mongodb} alt="Icone MongoDB" className="svgIcons"/>
      </div>
    </section>

    <section className="Aplicacao">
      <FontAwesomeIcon icon={faListCheck}/>
      <p>This project can be useful in your day to day life, but do not put sensitive data here, as it does not have a very strong security layer, but rest assured that your password will be saved and encrypted</p>
    </section>

    <section className="Cadastro">
      <p>To use the app, you must have a registration in our database.</p>
      <div>
      <p>Don't have an account?</p>
      <Link to="/cadastro">Register now</Link>
      </div>
    </section>    
    </HomeStyle>
    <Footer/>
    </>
  )
}

export default Home;