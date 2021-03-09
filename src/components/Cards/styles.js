import styled from 'styled-components';

export const Section = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  text-align: left;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h2`
  font-size: 32px;
  align-self: flex-start;
  color: #616161;
  font-weight: 400;
`;

export const CardsBox = styled.div`
  width: 230px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  border: 1px solid #616161;
  border-radius: 10px;
  padding: 0 10px 10px 10px;
  margin: 0 20px 0 0;
`;

export const TitleCard = styled.h3`
  font-size: 16px;
`;

export const TextCard = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

export const LinkCard = styled.a`
  font-size: 12px;
  color: inherit;
`;
