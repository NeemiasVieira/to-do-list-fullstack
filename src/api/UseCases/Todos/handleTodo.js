import api from "../../api";

export const handleTodo = async (id) => {
  try {
    const response = await api.patch(`/todos/${id}`);
    console.log('Estado da tarefa alterado:', response.data);
    // Você pode lidar com a resposta da API conforme necessário
  } catch (error) {
    console.error('Erro ao alterar o estado da tarefa:', error);
    // Você pode lidar com erros da API aqui
  }
};