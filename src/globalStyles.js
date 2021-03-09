import { createGlobalStyle } from 'styled-components';
import top from '../src/components/imgs/bgTop.png';
import bottom from '../src/components/imgs/bgBottom.png';

const GlobalStyle = createGlobalStyle`
  body {
    height:100vh;
    display: flex;
    margin: 0 auto;
    padding: 0;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans", Helvetica, Sans-Serif;
    color: #616161;
    background-image: url(${top}), url(${bottom});
    background-repeat: no-repeat;
    background-position: left top, right bottom;
  }
`;

export default GlobalStyle;
