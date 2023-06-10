import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { getUsers } from "./api/UseCases/Users/getUsers";

function App() {

  let [users, setUsers] = useState([])

  useEffect(() => {
    getUsers(setUsers)    
  }, [])
  
  return (
    <>
    {users.map((user) => {
      return(
        <div key={user.userid}>
        <p>Name: {user.name}</p>
        <p>username: {user.username}</p>
        <p>email: {user.email}</p>       
        <p>userid: {user.userid}</p>
        <p>created_at: {user.created_at}</p>
        </div>
      )
    })}
    </>
  );
}

export default App;
