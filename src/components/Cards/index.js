import React from 'react'
import {
  Section,
  Div,
  Title,
  CardsBox,
  TitleCard,
  TextCard,
  LinkCard
} from './styles'

const Cards = () => {
  return (
    <Section>
      <Title>Recentes</Title>
      <Div>
        <CardsBox>
          <TitleCard>📝climate-news</TitleCard>
          <TextCard>
            Climate journal with notices of the biggest 5 newspaper, consuming
            my own API
          </TextCard>
          <LinkCard
            href="https://github.com/dericparra/climate-news"
            target="_blank"
          >
            ver repositório
          </LinkCard>
        </CardsBox>
        <CardsBox>
          <TitleCard>📝tesla-homepage</TitleCard>
          <TextCard>Homepage of tesla reproduced in ReactJs</TextCard>
          <LinkCard
            href="https://github.com/dericparra/tesla-homepage"
            target="_blank"
          >
            ver repositório
          </LinkCard>
        </CardsBox>
        <CardsBox>
          <TitleCard>📝web-scraper</TitleCard>
          <TextCard>Web Scraper made with Node.Js</TextCard>
          <LinkCard
            href="https://github.com/dericparra/web-scraper"
            target="_blank"
          >
            ver repositório
          </LinkCard>
        </CardsBox>
      </Div>
    </Section>
  )
}

export default Cards
