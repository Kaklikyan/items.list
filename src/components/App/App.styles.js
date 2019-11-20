import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const Self = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  background-color: #4b555f;
  color: #878787;
  font-size: 32px;
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  height: calc(100% - 77px);
`;
