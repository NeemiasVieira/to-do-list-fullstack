import api from "../../api";

export const Authenticate = async(username, password, setState, setIsloading) => { 

  setIsloading(true);
  if(sessionStorage.getItem("token")){
    sessionStorage.removeItem("token")
  }

  setState({});

  let user = "";

  let data = {
    username,
    password
  };  

  await api
    .post("/sessions", data)
    .then((response) => {
      if(response.data.message === "Username or password incorrect"){
        setState("{}")
      }
      else{
      setState(response.data);
      sessionStorage.setItem("token", response.data.token);
      user = response.data.user.name;
      }      
    })
    .catch((erro) => console.log(erro.response.data));
    setIsloading(false);

    if(sessionStorage.getItem("token")) return [sessionStorage.getItem("token"), user];
    else return null;
};
