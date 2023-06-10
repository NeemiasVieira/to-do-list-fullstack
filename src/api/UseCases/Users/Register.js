import api from "../../api";

export const register = async(name, username, email, password) => {
  const data = {name, username, email, password}
  let nome = "";

  await api.post("/users", data).then((response) => {
    console.log(response.data)
    nome = response.data.name;

  }).catch((error) => console.log(error))

  if(nome) return nome;
  else return null;
}