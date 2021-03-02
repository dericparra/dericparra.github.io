import React from 'react';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
