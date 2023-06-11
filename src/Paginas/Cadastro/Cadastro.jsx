import { CadastroStyle } from "./CadastroStyle";
import { Footer } from "../../Componentes/Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/UseCases/Users/Register";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faUser, faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


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
        <h1>Cadastro</h1>
        <form action="submit">
          <label>Nome</label>
          <div className="divInput">
          <FontAwesomeIcon icon={faA} />
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          <label>Username</label>          
          <div className="divInput">
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            placeholder="Digite seu username"
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <label>E-mail</label>
          <div className="divInput">
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
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
          <div className="login">
          <p>Já tem cadastro?</p> <Link to="/login">Faça login</Link>
          </div>
          <button id="loginButton" type="submit" onClick={(e) => cadastrar(e)}>Criar cadastro</button>
        </form>
      </CadastroStyle>
      <Footer />
    </>
  );
};

export default Login;
