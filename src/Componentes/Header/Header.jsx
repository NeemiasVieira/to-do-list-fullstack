import { Link } from "react-router-dom"
import { HeaderStyle } from "./HeaderStyle"

export const Header = (props) => {
  return(
    <HeaderStyle>
    <h1>To Do List</h1>
    <div className="userActions">
    <p>{props.username}</p>
    <Link to="/">Logout</Link>
    </div>
    
    </HeaderStyle>
  )
}