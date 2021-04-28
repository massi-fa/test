import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 80%;
  margin: auto;
`;
const Logo = ({ immagine }) =>(
  <Container>
    <Image src={immagine} />
  </Container>
);

export default Logo;