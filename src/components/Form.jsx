import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: rgba(237, 246, 249,0.8);
  margin: 5px;
  border-radius: 10px;
  border: 0px solid;
  box-shadow: ${(props) => (props.condition ? '1px 1px 7px 1px red' : '1px 1px 7px 1px #333333')};
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const InputImg = styled.img`
 	height: 33px;
	margin-left: 10px;
  padding-right: 15px; 
`;

const Input = styled.input`
	width: 75%;
  outline: none;
  border-width:0px;
  border:none;
  background-color: transparent;
	height: 50px;
  font-size: 100%; 
  font-weight: bold;
`;

const Form = ({ immagine }) => (
  <Container>
    <InputImg src={immagine}/>
    <Input placeholder="Email"/>
  </Container>
);

export default Form;