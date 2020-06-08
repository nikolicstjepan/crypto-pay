import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    padding: 10px 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #e5e5e5e5
  }
`;

export default GlobalStyle;
