import {
  Section,
  Div,
  Title,
  CardsBox,
  TitleCard,
  TextCard,
  LinkCard,
} from './styles';

const Cards = () => {
  return (
    <Section>
      <Title>Recentes</Title>
      <Div>
        <CardsBox>
          <TitleCard>📝what-is-the-bread</TitleCard>
          <TextCard>
            Aplicação React (usando hooks) consumindo API publica dogCeo
          </TextCard>
          <LinkCard href="https://github.com/dericparra/what-is-the-breed">
            ver repositório
          </LinkCard>
        </CardsBox>
        <CardsBox>
          <TitleCard>📝be-the-hero</TitleCard>
          <TextCard>Aplicação desenvolvida na 11° semana OmniStack</TextCard>
          <LinkCard href="https://github.com/dericparra/be-the-hero">
            ver repositório
          </LinkCard>
        </CardsBox>
        <CardsBox>
          <TitleCard>📝weather-app</TitleCard>
          <TextCard>
            Aplicação de previsão do tempo, feita com react consumindo API
            publica
          </TextCard>
          <LinkCard href="https://github.com/dericparra/Weather-App">
            ver repositório
          </LinkCard>
        </CardsBox>
      </Div>
    </Section>
  );
};

export default Cards;
