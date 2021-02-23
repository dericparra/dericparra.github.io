import React from 'react';
import Avatar from './Avatar';
import Contact from './Contact';
import { Hi, TechStack } from './styledComponents/styles';

const Hero = () => {
  return (
    <div>
      <Avatar />
      <Hi>Hi Im Deko Web Developer</Hi>
      <TechStack>Front end Developer | Html | Css | Js | React</TechStack>
      <Contact />
    </div>
  );
};

export default Hero;
