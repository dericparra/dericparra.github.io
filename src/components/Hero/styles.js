import styled from 'styled-components'

export const Hi = styled.h1`
  font-size: 32px;
  font-weight: 300;
  color: #616161;
  text-transform: uppercase;
  margin: 5px 0 5px;
  align-self: flex-start;
  @media (max-width: 539px) {
    font-size: 20px;
  }
`

export const TechStack = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #616161;
  @media (max-width: 539px) {
    display: none;
  }
`

export const Section = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 100px 0;
  @media (max-width: 539px) {
    max-width: 320px;
    max-height: 160px;
    align-self: center;
    padding-top: 50vh;
    margin: 0;
  }
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 100%;
  margin-left: 20px;
  align-items: self-start;
  justify-content: center;
  text-align: left;
  @media (max-width: 539px) {
    max-width: 320px;
    max-height: 160px;
  }
`
