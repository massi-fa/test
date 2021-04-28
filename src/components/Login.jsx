import styled from 'styled-components/macro';
import Form from './Form.jsx';
import user from '../res/user.svg';

const Container = styled.div`
  width: 50%;
  margin: auto;
  border: 2px solid;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 40%;
  height: 3rem;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: black;
  border: none;
  border-radius: 20px;
`;

const H1 = styled.h1`
  color: white;
  margin: auto;
`;

const Login = () =>(
  <Container>
    <Form immagine={user} />
    <Form immagine={user} />
    <Form immagine={user} />
    <Button>
      <H1>Login</H1>
    </Button>
  </Container>
);

export default Login;