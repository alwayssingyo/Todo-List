import React from 'react';
import styled from 'styled-components';

const NotFound = ()=>{
	return (
    <Container>
      <Content>잘못된 경로입니다</Content>
    </Container>
	)
}

export default NotFound;

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

const Content = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #535353;
  @media screen and (max-width: 768px){
    font-size: 28px;
  }
`;