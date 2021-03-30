import styled from 'styled-components'
import foto from '../../assets/foto.png'

export const Avatar = styled.div`
  width: 220px;
  height: 320px;
  background-size: cover;
  background-image: url(${foto});
  @media (max-width: 539px) {
    max-width: 120px;
    max-height: 160px;
  }
`
