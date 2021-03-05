import { createGlobalStyle } from 'styled-components';
import bgTop from './assets/bgTop';
import bgBottom from './components/imgs/bgBottom';

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
    background-image: url(${bgTop}), url(${bgBottom});
    background-repeat: no-repeat;
    background-position: right bottom, left top;
  }
`;

export default GlobalStyle;
