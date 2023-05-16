import axios from "axios";

const todoAPi = axios.create({
  baseURL: "http://localhost:3500/",
});

export const getTodos = async () => {
  const response = await todoAPi.get("/todos", todo);
  return response.data;
};

export const addTodo = async (todo) => {
  return await todoAPi.post("/todos", todo);
};
export const updateTodo = async (todo) => {
  return await todoAPi.patch(`/todos/${todo.id}`, todo);
};

export const deleteTodo = async (id) => {
  return await todoAPi.delete(`"/todos/${id}`, id);
};

export  default todoAPi;