import api from "../../api";
import axios from "axios";

export const getTodos = async(setState) => {
  
    const token = sessionStorage.getItem("token");    
    
    await api.get("/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(response.data)
      sessionStorage.setItem("username", response.data[0].username);
      setState(response.data)
    }).catch((error) => console.log(error.response.data))

    

}