import { Section, Div, Title } from './styles';

const Cards = () => {
  return (
    <Section>
      <Title>Recentes</Title>
      <Div>
        <Cards>
          <h3>what-is-the-bread</h3>
          <p>Aplicação React (usando hooks) consumindo API publica dogCeo</p>
          <a href="https://github.com/dericparra/what-is-the-breed">
            ver repositório
          </a>
        </Cards>
        <Cards>
          <h3>be-the-hero</h3>
          <p>Aplicação desenvolvida na 11° semana OmniStack</p>
          <a href="https://github.com/dericparra/be-the-hero">
            ver repositório
          </a>
        </Cards>
        <Cards>
          <h3>weather-app</h3>
          <p>
            Aplicação de previsão do tempo, feita com react consumindo API
            publica
          </p>
          <a href="https://github.com/dericparra/Weather-App">
            ver repositório
          </a>
        </Cards>
      </Div>
    </Section>
  );
};

export default Cards;
