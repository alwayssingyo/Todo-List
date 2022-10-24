import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import TodoItem from "./TodoItem";
import { getTodo, addTodo, deleteTodo, updateTodo } from "../../api/request";
import { IoIosAdd } from 'react-icons/io';

const TodoList = ()=>{

  const navigate = useNavigate();
  const token = localStorage.getItem('access-token');

  const [todoData, setTodoData] = useState();
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    if( !token ){
      navigate("/");
    }else{
      getItem();
    }
  }, []);

  const getItem = async () => {
    const { data } = await getTodo();
    setTodoData(data);
  };

  const addItem = async () => {
    if(inputVal === '') return
    const { data : newVal } = await addTodo(inputVal);
    setTodoData((prev) => [...prev, newVal]);
    setInputVal('');
  };

  const updateItem = async (id, text, CompleteYn) => {
    await updateTodo(id, {todo:text, isCompleted:CompleteYn});
    setTodoData(
      todoData.map((item) => (item.id === id ? { ...item, todo: text, isCompleted: CompleteYn } : item))
    );
  };

  const deleteItem = async (id) => {
    await deleteTodo(id);
    setTodoData(todoData.filter(item => item.id !== id ));
  };

	return (
    <Container>
      <TodoTop>
        <TodoTitle>Todo List</TodoTitle>
        <TodoForm>
          <input type='text' value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}}/>
          <button type='text' onClick={addItem}>
            <IoIosAdd color="#fff"/>
          </button>
        </TodoForm>
      </TodoTop>

      <TodoCont>
        {todoData && todoData.map((item)=>(
          <TodoItem 
            key={item.id}
            id={item.id}
            todo={item.todo}
            isCompleted={item.isCompleted}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        ))}
      </TodoCont>
    </Container>
	)
}

export default TodoList;

const Container = styled.div`
  width: 400px;
  height: 500px;
  max-height: calc(100vh - 80px);
  padding: 40px;
  border-radius: 20px;
  background-color: #fff;
  box-sizing: border-box;
  @media screen and (max-width: 768px){
    padding: 24px;
  }
`;

const TodoTop = styled.div`
  margin-bottom: 30px;
`;

const TodoTitle = styled.div`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.33;
  color: #535353;
  text-align: center;
`;

const TodoForm = styled.div`
  display: flex;
  input {
    width: 100%;
    padding: 13px 16px;
    border-radius: 8px;
    background-color: #f5f7fb;
    font-size: 14px;
    line-height: 1.38;
    &::placeholder {
      color: #bdbdbd;
    }
  }
  button {
    width: 60px;
    margin-left: 16px;
    border-radius: 8px;
    background-color: #8e8fee;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.71;
    text-align: center;
    color: #fff;
  }
  svg {
    vertical-align: middle;
    width: 26px;
    height: 26px;
  }
`;

const TodoCont = styled.div`
  height: calc(100% - 137px);
  overflow-y: auto;
`;