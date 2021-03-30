import styled from 'styled-components'
import top from '../src/assets/bgTop.png'
import bottom from '../src/assets/bgBottom.png'
import bgMobile from '../src/assets/bgMobile.png'

export const Div = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: url(${top}), url(${bottom});
  background-repeat: no-repeat;
  background-position: left top, right bottom;
  @media (max-width: 539px) {
    background-image: url(${bgMobile});
    background-repeat: no-repeat;
    background-position: right top 55vh;
  }
`

export const DarkMode = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: none;
`
