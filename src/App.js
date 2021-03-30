import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import GlobalStyle from './globalStyles';
import { Div, DarkMode } from './styles';

function App() {
  const [light, setLight] = useState(false);

  return (
    <Div className={light ? 'light-bg' : ''}>
      <GlobalStyle />
      <DarkMode onClick={() => setLight(!light)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="27"
          viewBox="0 0 30 27"
          fill="none"
        >
          <path
            d="M17.8542 18.1458C18.151 17.6519 18.3333 17.0808 18.3333 16.4634C18.3333 14.6473 16.8385 13.1707 15 13.1707C14.1042 13.1707 13.2917 13.5257 12.6927 14.0917C11.8438 12.5688 10.2188 11.5244 8.33333 11.5244C5.57292 11.5244 3.33333 13.7367 3.33333 16.4634C3.33333 16.5663 3.35938 16.6589 3.36458 16.7567C1.41146 17.4306 0 19.2468 0 21.4024C0 24.1292 2.23958 26.3415 5 26.3415H17.5C19.8021 26.3415 21.6667 24.4996 21.6667 22.2256C21.6667 20.0699 19.9844 18.3258 17.8542 18.1458ZM29.4427 15.3521C24.5938 16.2628 20.1458 12.5894 20.1458 7.75324C20.1458 4.96475 21.6562 2.40263 24.1094 1.02382C24.4896 0.812881 24.3906 0.246951 23.9635 0.164634C23.3542 0.056593 22.7448 0 22.1354 0C16.6198 0 12.1406 4.4194 12.1406 9.87805C12.1406 10.3154 12.1771 10.7424 12.2344 11.1643C12.5417 11.3855 12.8385 11.6221 13.1042 11.8948C13.6979 11.653 14.3385 11.5244 15 11.5244C17.7552 11.5244 20 13.7418 20 16.4634C20 16.6486 19.9896 16.8338 19.9688 17.0139C21.1979 17.5696 22.1771 18.5316 22.7552 19.7201C25.5885 19.5452 28.1563 18.2127 29.8958 16.0981C30.1719 15.7637 29.8698 15.2698 29.4427 15.3521Z"
            fill="#616161"
          />
        </svg>
      </DarkMode>
      <Hero />
      <Cards />
      <Footer />
    </Div>
  );
}

export default App;
