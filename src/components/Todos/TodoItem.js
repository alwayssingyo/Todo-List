import React, { useState } from "react";
import styled from 'styled-components';
import { BiPencil } from 'react-icons/bi';
import { IoIosCloseCircle } from 'react-icons/io';
import { AiOutlineCheck } from 'react-icons/ai';
import { CgRadioCheck, CgCheckO } from "react-icons/cg";

const TodoItem = ({ id, todo, isCompleted, updateItem, deleteItem })=>{

  const [correct, setCorrect] = useState(false);
  const [text, setText] = useState('');

  const changeInput = (e)=>{
    setText(e.target.value);
  }

	return (
    <Container>
      <Inner>
        <CheckboxWrap>
          {isCompleted?(
            <button onClick={()=>{updateItem(id, todo, false);}}><CgCheckO color='#535353'/></button>
          ) : (
            <button onClick={()=>{updateItem(id, todo, true);}}><CgRadioCheck color='#535353'/></button>
          )}
        </CheckboxWrap>
        <InputWrap className={isCompleted && 'is-completed'}>
          {correct ?(
            <input type='text' value={text} onChange={changeInput}/>
          ) : (
            <div className="text">{todo}</div>
          )}
        </InputWrap>
        <ButtonWrap>
          <button type='text'>
            {correct ?(
              <AiOutlineCheck onClick={()=>{ updateItem(id, text, isCompleted); setCorrect(false); }} color='#535353'/>
            ) : (
              <BiPencil onClick={()=>{ setText(todo); setCorrect(true); }} color='#535353'/>
            )}
          </button>
        </ButtonWrap>
        <ButtonWrap>
          <button type='text' onClick={()=>{deleteItem(id)}}><IoIosCloseCircle/></button>
        </ButtonWrap>
      </Inner>
    </Container>
	)
}

export default TodoItem;

const Container = styled.div`
  &+&{
    margin-top: 8px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const CheckboxWrap = styled.div`
  width: 18px;
  button {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0;
    vertical-align: top;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;

const InputWrap = styled.div`
  width: calc(100% - 18px - 50px - 16px);
  padding: 0 8px;
  input, .text {
    width: 100%;
    min-height: 36.5px;
    padding: 8px 0;
    font-size: 14px;
    box-sizing: border-box;
    border-bottom: 1px solid #fff;
  }
  input {
    font-family: "NotoSansKR";
    border-bottom: 1px solid #bdbdbd;
  }
  &.is-completed .text{
    text-decoration: line-through;
    color: #909090;
  }
`;

const ButtonWrap = styled.div`
  &+& {
    margin-left: 10px;
  }
  button {
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 14px;
    color: #3e3e3e;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;