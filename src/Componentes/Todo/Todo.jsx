import { TodoStyle } from "./TodoStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons"

export const Todo = ({key, deadline, done, description, created_at }) => {
  return(
    <TodoStyle>
      <div>
        <ul>
          <li className="TodoDescription">{description}</li>
          <div className="acoes">
            <li><FontAwesomeIcon icon={faPenToSquare} /></li>
            <li><FontAwesomeIcon icon={faSquareCheck} /></li>
          </div>
        </ul>
        <div className="Times">
          <p>Criado em: {created_at}</p>
          <p>Termina em: {deadline}</p>
        </div>
      </div>
    </TodoStyle>
  )

}
