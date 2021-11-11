import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    height:100vh;
    display: flex;
    margin: 0 auto;
    padding: 60px 0;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans", Helvetica, Sans-Serif;
    color: #616161;
    overflow-x: hidden;
    overflow-y: auto; 

    @media (min-width: 400px) {
      padding:0;
    }
  }

  .light-bg {
    background-color: #292929;
  }
`

export default GlobalStyle
