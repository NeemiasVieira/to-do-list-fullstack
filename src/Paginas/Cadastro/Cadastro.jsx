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
        <h1>Signup</h1>
        <form action="submit">
          <label>Name</label>
          <div className="divInput">
          <FontAwesomeIcon icon={faA} />
          <input
            type="text"
            placeholder="Type your name"
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          <label>Username</label>          
          <div className="divInput">
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            placeholder="Type your username"
            onChange={(e) => setUsername(e.target.value)}
          />
          </div>
          <label>E-mail</label>
          <div className="divInput">
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            type="text"
            placeholder="Type your e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <label>Password</label>
          <div className="divInput">
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            placeholder="Type your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <div className="login">
          <p>Already signed up?</p> <Link to="/login">Login</Link>
          </div>
          <button id="loginButton" type="submit" onClick={(e) => cadastrar(e)}>SignUp</button>
        </form>
      </CadastroStyle>
      <Footer />
    </>
  );
};

export default Login;
