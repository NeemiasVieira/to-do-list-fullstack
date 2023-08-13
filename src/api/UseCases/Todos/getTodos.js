import api from "../../api";

export const getTodos = async(setState, setIsloading) => {
  
    const token = sessionStorage.getItem("token");    
    setIsloading(true);
    await api.get("/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setIsloading(false);
      sessionStorage.setItem("username", response.data[0].username);
      setState(response.data)
    }).catch((error) => console.log(error.response.data))

    

}