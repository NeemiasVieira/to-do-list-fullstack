import api from "../../api";

export const createTodo = async (description, username, deadline, done) => {
  try {
    const response = await api.post('/todos', {
      description,
      username,
      deadline,
      done,
    });

    console.log('Resposta da requisição:', response.data);

  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};