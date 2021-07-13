import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import palette from './palette';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  html, body {
    overflow: hidden;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: ${palette.gray[5]};
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'AppleSDGothicNeoM00','Segoe UI', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }
  
`;

export default GlobalStyles;
