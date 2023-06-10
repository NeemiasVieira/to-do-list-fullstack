import api from "../../api"

const getUsers = async (setState) => {
  await api.get("/users")
    .then((response) => setState(response.data))
    .catch((error) => console.log(error))    
}

export {getUsers};