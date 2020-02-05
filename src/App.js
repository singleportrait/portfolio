import React from 'react';
import logo from './logo.svg';

import { GlobalStyles } from './GlobalStyles';

import {
  Section, SectionColumn,
} from './Styles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Section>
        <SectionColumn wideScreensOnly />
        <SectionColumn text={true}>
          <h1>Jenn Scheer</h1>
          <p>I am a product designer &amp; developer in NYC.</p>
        </SectionColumn>
      </Section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
