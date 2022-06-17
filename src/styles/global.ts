import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    border: 0; 
    padding: 0;
    font-family: "Poppins", sans-serif;
  }

  html, body, #__next {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.bg};
    width: 100%;
    flex: 1;
    min-height: 100%;
  }
`;
