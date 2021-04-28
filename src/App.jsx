import styled, { createGlobalStyle } from 'styled-components/macro';
import Logo from './components/Logo.jsx';
import immLogo from './res/logomaxtrino.png';
import Login from './components/Login.jsx';
import sfondo from './res/sfondo.svg';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s;
  }
  body {
    overflow: hidden;
    height: 100%;
  }
  html{
    height: 100%;
  }
  #root{
    height:100%;
  } 
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  background-image:url(${sfondo});
  background-repeat:no-repeat;
  background-size:cover;
  //height: 100vh;
`;
const Frame = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;



const App = () => (
  <Container>
    <GlobalStyle />
    <Frame>
      <Logo immagine={immLogo}/>
      <Logo immagine={immLogo}/>
    </Frame>
    <Frame>
      <Login />
    </Frame>
  </Container>
);

export default App;
