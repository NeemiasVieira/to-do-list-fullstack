import { Link } from "react-router-dom"
import { HeaderStyle } from "./HeaderStyle"

export const Header = (props) => {
  return(
    <HeaderStyle>
    <h1>Lista de Tarefas</h1>
    <div className="userActions">
    <p>Usuario: {props.username}</p>
    <Link to="/">Logout</Link>
    </div>
    
    </HeaderStyle>
  )
}