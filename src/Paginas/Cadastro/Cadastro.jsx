import { CadastroStyle } from "./CadastroStyle";
import { Footer } from "../../Componentes/Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/UseCases/Users/Register";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");  
  const [name, setName] = useState("");  

  const navigate = useNavigate();

  const cadastrar = async(e) => {
    e.preventDefault();
    const nome = await register(name, username, email, password)
    if(nome){
      console.log(nome);
      navigate("/");
    }  
  }


  return (
    <>
      <CadastroStyle>
        <form action="submit">
          <label>nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          <label>username</label>
          <input
            type="text"
            placeholder="Digite seu username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>e-mail</label>
          <input
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="loginButton" type="submit" onClick={(e) => cadastrar(e)}>Criar cadastro</button>
        </form>
      </CadastroStyle>
      <Footer />
    </>
  );
};

export default Login;
