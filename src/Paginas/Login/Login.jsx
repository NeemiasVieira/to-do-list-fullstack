import { LoginStyle } from "./LoginStyle";
import { Footer } from "../../Componentes/Footer/Footer";
import { useState } from "react";
import { Authenticate } from "../../api/UseCases/Users/Authenticate";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState({});
  const navigate = useNavigate();

  const logar = async(e) => {
  e.preventDefault();
  if(await Authenticate(username, password, setIsAuthenticated)){
    navigate("/lista");
  }
  console.log(isAuthenticated);
  }
  

  return (
    <>
      <LoginStyle>
        <form action="submit">
          <label>Usuário</label>
          <input
            type="text"
            placeholder="Digite seu nome de usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="loginButton" type="submit" onClick={(e) => logar(e)}>Entrar</button>
        </form>
      </LoginStyle>
      <Footer />
    </>
  );
};

export default Login;
