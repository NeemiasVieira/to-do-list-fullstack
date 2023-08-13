import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Paginas/Home/Home";
import Login from "../Paginas/Login/Login";
import Cadastro from "../Paginas/Cadastro/Cadastro";
import List from "../Paginas/PaginasAutenticadas/List/List";
import "../index.css"

const Router = () => {
  return(
    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>}/>
    <Route element={<Login/>} path="/login"/>
    <Route element={<Cadastro/>} path="/cadastro"/>

    {/* Rotas Autenticas */}
    <Route element={<List/>} path="/lista"/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;







