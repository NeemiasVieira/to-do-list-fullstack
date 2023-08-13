import { ListStyle, ListStyleLoading } from "./ListStyle";
import { Header } from "../../../Componentes/Header/Header";
import { Footer } from "../../../Componentes/Footer/Footer";
import { getTodos } from "../../../api/UseCases/Todos/getTodos";
import { useEffect, useState } from "react";
import { Todo } from "../../../Componentes/Todo/Todo";
import { Loading } from "../../../Componentes/Loading/Loading";
import { ModalCriacao } from "../../../Componentes/modalCriacao/modalCriacao.jsx";

const Data = (datetime) => {
  let date = datetime.split("T");
  let splitdate = date[0].split("-");
  return splitdate[2] + "/" + splitdate[1] + "/" + splitdate[0] + ".";
};

const List = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTodos(setTodos, setIsLoading);
  }, []);

  if (isLoading)
    return (
      <>
        <Header username={sessionStorage.getItem("username")} />
        <ListStyleLoading>
          <Loading />
        </ListStyleLoading>
        <Footer />
      </>
    );

  return (
    <>
      <Header username={sessionStorage.getItem("username")} />
      <ListStyle>
        <ModalCriacao/>
        {todos.length > 0 && todos[0].hasOwnProperty('done') ? (
          todos.map((todo) => (
            <Todo
            key={todo.todoid}
            todoid={todo.todoid}
            deadline={Data(todo.deadline)}
            done={todo.done}
            description={todo.description}
            created_at={Data(todo.created_at)}
            />
          ))
        ) : (
          <p>You have no tasks registered</p>
        )}
      </ListStyle>
      <Footer />
    </>
  );
};

export default List;
