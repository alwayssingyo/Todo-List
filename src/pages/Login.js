import React from 'react';
import styled from 'styled-components';
import AuthForm from '../components/Auth/AuthForm';

const Login = ()=>{
	return (
    <Container>
      <AuthForm />
    </Container>
	)
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 40px;
  background-color: #f5f7fb;
  box-sizing: border-box;
  @media screen and (max-width: 768px){
    padding: 0 24px;
  }
`;