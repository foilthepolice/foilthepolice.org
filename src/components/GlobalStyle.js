import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Akkurat';
    src: url(${require('../../static/fonts/akk-l.ttf')}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Akkurat';
    src: url(${require('../../static/fonts/akk.ttf')}) format('ttf');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Akkurat';
    src: url(${require('../../static/fonts/akk-b.ttf')}) format('ttf');
    font-weight: 700;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Akkurat', sans-serif;
    line-height: 135%;
    color: ${COLORS.WHITE[900]};
  }
  body {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  ul {
    list-style-type: none;
  }
  ul, ol {
    padding: 0;
  }
  html, body, #root {
    background: ${COLORS.BLUE[100]};
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
