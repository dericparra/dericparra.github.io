import styled from 'styled-components';
import top from '../src/components/imgs/bgTop.png';
import bottom from '../src/components/imgs/bgBottom.png';

export const Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: url(${top}), url(${bottom});
  background-repeat: no-repeat;
  background-position: left top, right bottom;
`;

export const DarkMode = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: none;
`;
