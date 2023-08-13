import api from "../../api";

export const deleteTodo = async (id) => {
  try {
    const response = await api.delete(`/todos/${id}`);
    console.log('Tarefa excluída:', response.data);
    // Você pode lidar com a resposta da API conforme necessário
  } catch (error) {
    console.error('Erro ao excluir a tarefa:', error);
    // Você pode lidar com erros da API aqui
  }
};