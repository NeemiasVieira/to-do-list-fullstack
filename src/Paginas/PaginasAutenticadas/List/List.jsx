import { ListStyle } from "./ListStyle"
import { Header } from "../../../Componentes/Header/Header";
import { Footer } from "../../../Componentes/Footer/Footer";
import { getTodos } from "../../../api/UseCases/Todos/getTodos";
import { useEffect, useState } from "react";
import { Todo } from "../../../Componentes/Todo/Todo";

const Data = (datetime) => {
  let date = datetime.split("T");
  let splitdate = date[0].split("-");
  return splitdate[2] + "/" + splitdate[1] + "/" + splitdate[0] + "."
} 



const List = () => {

  const [todos, setTodos] = useState([]);

  useEffect(()=> {
    getTodos(setTodos);
  }, []);

  return(
    <>
    <Header username={sessionStorage.getItem("username")}/>
    <ListStyle>      
      {todos.map((todo) => {
        return(
          <Todo key={todo.todoid} deadline = {Data(todo.deadline)} done = {todo.done} description = {todo.description} created_at = {Data(todo.created_at)}/>
        )
      })
      }
    </ListStyle>
    <Footer/>
    </>
  )
}

export default List;