import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const api = axios.create({
  baseURL: "https://to-do-list-api-pink.vercel.app",
});

function App() {

  const [users, setUsers] = useState({})

  useEffect(() => {
    api.get("/users")
    .then((response) => setUsers(response.data))
    .catch((error) => console.log(error))
  }, [])
  
  return (
    <>
    {users.map((user) => {
      return(
        <div key={user.id}>
        <p>Name: {user.name}</p>
        <p>username: {user.username}</p>
        <p>email: {user.email}</p>
        <p>id: {user.id}</p>
        <p>password: {user.password}</p>
        <p>userid: {user.userid}</p>
        <p>created_at: {user.created_at}</p>
        </div>
      )
    })}
    </>
  );
}

export default App;
