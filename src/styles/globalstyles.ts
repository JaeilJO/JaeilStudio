import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html,
  body {
    font-size: 62.5%;
    padding: 0;
    margin: 0;
    font-family: 'Oswald', sans-serif;
    scroll-behavior: smooth;
  }
  button{
    font-family: 'Oswald', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
