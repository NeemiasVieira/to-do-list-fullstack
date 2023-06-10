import axios from "axios";

const api = axios.create({
  baseURL: "https://to-do-list-api-pink.vercel.app",
  // baseURL: "http://localhost:3333"
});

export default api;