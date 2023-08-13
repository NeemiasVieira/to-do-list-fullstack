import api from "../../api";

export const editTodo = async (id, description, deadline, setIsloading) => {
  setIsloading(true);
  try {
    const response = await api.put(`/todos/${id}`, {
      description: description,
      deadline: deadline
    });
    setIsloading(false);
    console.log('Resposta da API:', response.data);
  } catch (error) {
    setIsloading(false);
    console.error('Erro ao enviar dados para a API:', error);
  }
};