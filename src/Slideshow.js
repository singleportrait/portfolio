import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import styled from 'styled-components/macro';

import geniusImage from './images/genius-homepage-after-matches-video.png';

import {
  Section, SectionColumn,
  SectionColumnLastParagraph, SectionColumnFirstParagraph,
} from './Section';

import {
  columnBreakpoint, slideshowBreakpoint,
  maxImageWidth, mediumScreenImageWidth, smallScreenImageWidth,
} from './Styles';

class Slideshow extends Component {
  render() {
    return (
      <React.Fragment>
        <Section header>
          <h2>Title</h2>
        </Section>

        <Section slideshow>
          <Slides>
            <Slide>
              <SlideImage src={geniusImage} alt="Here is some alt text." />
            </Slide>
            <Slide>
              <SlideImage src={geniusImage} alt="Here is some alt text." />
            </Slide>
          </Slides>
        </Section>

        <Section>
          <SectionColumn>
            Buttons
          </SectionColumn>
        </Section>

        <Section text>
          <SectionColumn text>
            <p>Head of Design @ Genius</p>
            <SectionColumnLastParagraph>
              Description...
            </SectionColumnLastParagraph>
          </SectionColumn>
          <SectionColumn text>
            <MediaQuery minWidth={columnBreakpoint}>
              <p>&nbsp;</p>
            </MediaQuery>
            <SectionColumnFirstParagraph>
              ... continued text.
            </SectionColumnFirstParagraph>
          </SectionColumn>
        </Section>

      </React.Fragment>
    );
  }
}

const imageRatio = '.695555556';

const Slides = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  transition: left .3s ease;
  left: 0;
`;

const Slide = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-shrink: 0;
  z-index: 1;
  height: calc(${maxImageWidth} * ${imageRatio});

  @media screen and (max-width: ${slideshowBreakpoint}) {
    height: calc(${mediumScreenImageWidth} * ${imageRatio});
  }

  @media screen and (max-width: ${columnBreakpoint}) {
    height: calc(${smallScreenImageWidth} * ${imageRatio});
  }
`;

const SlideImage = styled.img`
  max-width: ${maxImageWidth};
  margin: 0 auto;
  display: block;

  &:before {
    content: "";
    position: relative;
    z-index: 0;
    padding-top: ${imageRatio * 100}%;
    display: block;
  }

  @media screen and (max-width: ${slideshowBreakpoint}) {
    max-width: ${mediumScreenImageWidth};
  }

  @media screen and (max-width: ${columnBreakpoint}) {
    max-width: ${smallScreenImageWidth};
  }
`;

export default Slideshow;
