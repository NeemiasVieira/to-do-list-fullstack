import { LoginStyle } from "./LoginStyle";
import { Footer } from "../../Componentes/Footer/Footer";
import { useState, useEffect } from "react";
import { Authenticate } from "../../api/UseCases/Users/Authenticate";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Loading } from "../../Componentes/Loading/Loading";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const logar = async(e) => {
  e.preventDefault();  
  if(await Authenticate(username, password, setIsAuthenticated, setIsloading)){
    navigate("/lista");
  }
  }  
  

  return (
    <>
      <LoginStyle>
      {isLoading ? (<Loading/>) : (
      <>
      <h1>Login</h1>
        <form action="submit">
          <label>Usuário</label>
          <div className="divInput">
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            placeholder="Digite seu nome de usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <label>Senha</label>
          <div className="divInput">
            <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <div className="cadastro">
          <p>Não tem cadastro?</p> <Link to="/cadastro">Clique aqui</Link>
          </div>
          <button id="loginButton" type="submit" onClick={(e) => logar(e)}>Entrar</button>
        </form>
        </>
        )}        
      </LoginStyle>
      <Footer />
    </>
  );
};

export default Login;
