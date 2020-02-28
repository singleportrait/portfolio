import React from 'react';
import MediaQuery from 'react-responsive'

import logo from './logo.svg';

import { GlobalStyles } from './GlobalStyles';
import { Section, SectionColumn } from './Section';
import Slideshow from './Slideshow';

import { SLIDES } from './slidesData';

import { columnBreakpoint } from './Styles';

function App() {
  const getCollection = (collectionKey) => {
    return SLIDES.find(collection => collection.key === collectionKey);
  }

  return (
    <div className="App">
      <GlobalStyles />
      <Section>
        <MediaQuery minWidth={columnBreakpoint}>
          <SectionColumn />
        </MediaQuery>
        <SectionColumn text>
          <h1>Jenn Scheer</h1>
          <p>I am a product designer &amp; developer in NYC.</p>
        </SectionColumn>
      </Section>
      <Slideshow collection={getCollection("genius")} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Section header>
        <MediaQuery minWidth={columnBreakpoint}>
          <SectionColumn />
        </MediaQuery>
        <SectionColumn text>
          <p>I am currently freelancing.</p>

          <p>
            Contact me at...
          </p>
        </SectionColumn>
      </Section>

    </div>
  );
}

export default App;
