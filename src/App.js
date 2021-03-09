import React from 'react';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import GlobalStyle from './globalStyles';
import { Div } from './styles';

function App() {
  return (
    <Div className="App">
      <GlobalStyle />
      <Hero />
      <Cards />
      <Footer />
    </Div>
  );
}

export default App;
