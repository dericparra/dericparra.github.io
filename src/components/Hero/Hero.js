import React from 'react'
import Avatar from '../Avatar/Avatar'
import Contact from '../Contact/Contact'
import { Hi, TechStack, Section, Div } from './styles'

const Hero = () => {
  return (
    <Section>
      <Avatar />
      <Div>
        <Hi>Hi</Hi>
        <Hi>Im Deko</Hi>
        <Hi>Web Developer</Hi>
        <TechStack>Front end Developer | Html | Css | Js | React</TechStack>
        <Contact />
      </Div>
    </Section>
  )
}

export default Hero
