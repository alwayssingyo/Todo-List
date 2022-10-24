import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { signUp, logIn } from "../../api/request";

const AuthForm = ()=>{

  const navigate = useNavigate();
  const token = localStorage.getItem('access-token');

  const [type, setType] = useState('login');
  const [inputVal, setInputVal] = useState({ email:'', password:'' });
  const [error, setError] = useState({ email:false, password:false });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    if( token ){
      navigate("/todo");
    }
  }, []);

  useEffect(() => {
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }, [type]);

  const checkValid = (e)=>{
    const {id, value} = e.target;
    const emailRegex = /@+/g;

    if( id === 'email' && emailRegex.test(value) ){
      setError({...error, [id]:true})
    }else if( id === 'password' && value.length >= 8 ) {
      setError({...error, [id]:true})
    }else {
      setError({...error, [id]:false})
    }

    setInputVal({...inputVal, [id]:value});
  }

  const {email, password} = inputVal;

  const AuthpHandler = async () => {
    if( type === 'signup' ){
      try {
        const res = await signUp({email, password});
        alert("회원가입이 완료되었습니다.");
        window.location.reload();
      } catch(err) {
        alert("이미 존재하는 이메일입니다.");
      }
    }else{
      try {
        const res = await logIn({email, password});
        localStorage.setItem('access-token', `Bearer ${res.data.access_token}`);
        navigate("/todo");
      } catch(err) {
        alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
      }
    }
  };

	return (
    <Container>
      <Intro>Todo List</Intro>

      <FormWrap>
        <InputWrap>
          <input type='email' id="email" ref={emailRef} placeholder='이메일' onChange={checkValid}/>
        </InputWrap>
        <InputWrap>
          <input type='password' id="password" ref={passwordRef} placeholder='비밀번호' onChange={checkValid}/>
        </InputWrap>
        <ButtonWrap>
          <button 
            type='text' 
            disabled={ !(error.email && error.password) }
            onClick={AuthpHandler}
          >
            {type === 'login' ? '로그인' : '회원가입'}
          </button>
        </ButtonWrap>
      </FormWrap>

      <SwitchWrap>
        {type === 'login' ? (
          <button type='text' onClick={()=>{ setType('signup') }}>회원가입</button>
        ) : (
          <button type='text' onClick={()=>{ setType('login') }}>로그인</button>
        )}
      </SwitchWrap>

    </Container>
	)
}

export default AuthForm;

const Container = styled.div`
  width: 300px;
  padding: 40px;
  border-radius: 20px;
  background-color: #fff;
`;

const Intro = styled.div`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.33;
  color: #535353;
  text-align: center;
`;

const FormWrap = styled.div`
  margin-top: 32px;  
`;

const InputWrap = styled.div`
  &+& {
    margin-top: 12px;
  }
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
`;

const ButtonWrap = styled.div`
  margin-top: 32px;
  button {
    width: 100%;
    padding: 13px;
    border-radius: 8px;
    background-color: #8e8fee;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.38;
    color: #fff;
    &:disabled {
      background-color: #ddd;
    }
  }
`;

const SwitchWrap = styled.div`
  margin-top: 18px;
  text-align: center;
  button {
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    color: #8e8fee;
  }
`;