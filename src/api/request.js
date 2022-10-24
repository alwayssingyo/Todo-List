import axios from "axios";

export const instance = axios.create({
  baseURL: `https://pre-onboarding-selection-task.shop`,
});

export const signUp = async (body)=>{
  return await instance.post(`/auth/signup`, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const logIn = async (body)=>{
  return await instance.post(`/auth/signin`, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const getTodo = async ()=>{
  return await instance.get(`/todos`, {
    headers: {
      Authorization: localStorage.getItem('access-token'),
    },
  });
}

export const addTodo = async (body)=>{
  return await instance.post(`/todos`, {todo:body}, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('access-token'),
    },
  });
}

export const updateTodo = async (id, body)=>{
  return await instance.put(`/todos/${id}`, body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('access-token'),
    },
  });
}

export const deleteTodo = async (id)=>{
  return await instance.delete(`/todos/${id}`, {
    headers: {
      Authorization: localStorage.getItem('access-token'),
    },
  });
}

