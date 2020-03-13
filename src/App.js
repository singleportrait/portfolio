import React, { useState } from 'react';
import MediaQuery from 'react-responsive'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import { Section, SectionColumn } from './SectionStyles';
import Slideshow from './Slideshow';

import { SLIDES } from './slidesData';

import { columnBreakpoint, linkColor } from './Styles';

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <div className="App">
      <GlobalStyles />
      <Section>
        <MediaQuery minWidth={columnBreakpoint}>
          <SectionColumn />
        </MediaQuery>
        <SectionColumn text intro>
          <h1>Jenn Scheer</h1>
          <p>I am a product designer &amp; developer in NYC.</p>
        </SectionColumn>
      </Section>
      { SLIDES.map(collection =>
        <Slideshow key={collection.key} collection={collection} />
      )}
      <Section header>
        <MediaQuery minWidth={columnBreakpoint}>
          <SectionColumn />
        </MediaQuery>
        <SectionColumn text>
          <p>I am currently freelancing.</p>

          <p>
            Contact me at&nbsp;
            <CopyToClipboard
              text={"jenn@jennscheer.com"}
              onCopy={() => copyEmail()}
            >
              <EmailLink copied={copied}>jenn@jennscheer.com</EmailLink>
            </CopyToClipboard>.
            { copied &&
              <CopiedConfirmationText>Copied!</CopiedConfirmationText>
            }
          </p>
        </SectionColumn>
      </Section>

    </div>
  );
}

const EmailLink = styled.span`
  text-decoration: underline;
  cursor: ${props => props.copied ? 'default' : 'pointer'};
  ${props => props.copied && `color: ${linkColor}`};
`;

const CopiedConfirmationText = styled.span`
  text-transform: uppercase;
  font-size: .75rem;
  font-weight: 500;
  user-select: none;
  background-color: rgba(0,0,0,0.08);
  padding: 2px 4px 1px;
  margin-left: 4px;
`;

export default App;
