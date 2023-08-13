import { TodoStyle } from "./TodoStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import ModalEdicao from "../ModalEdicao/ModalEdicao"
import { deleteTodo } from "../../api/UseCases/Todos/deleteTodo"
import { handleTodo } from "../../api/UseCases/Todos/handleTodo"
import { useState } from "react"

const domDelete = (e) => {
  let todo = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
  todo.remove();
}

export const Todo = ({todoid, deadline, done, description, created_at }) => {

  const [isDone, setIsDone] = useState(done);

  return(
    <TodoStyle>
      <div>
        <ul>
          <li className="TodoDescription">{description}</li>
          <div className="acoes">
            <li><button onClick={async(e) => {              
              setIsDone(!isDone);
              await handleTodo(todoid);
              
            }}><FontAwesomeIcon icon={faSquareCheck} style={{ color: isDone ? 'green' : 'red' }} /></button></li>
            <li><ModalEdicao id={todoid} descriptionstatus={description} deadlinestatus={deadline}/></li>
            <li><button onClick={async(e) => {
              domDelete(e);
              await deleteTodo(todoid);          
              
            }}><FontAwesomeIcon icon={faTrashCan} className="trashIcon" /></button></li>
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
