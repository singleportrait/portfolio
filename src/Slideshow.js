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
  smallScreenMargins,
  maxImageWidth, mediumScreenImageWidth, smallScreenImageWidth,
  primaryColor, fingerWidth,
} from './Styles';

class Slideshow extends Component {

  goToSlide = (i) => {
    console.log("Going to slide", i);
  }

  goToPreviousSlide() {
    console.log("Going to previous slide");
  }

  goToNextSlide() {
    console.log("Going to next slide");
  }

  render() {

    const renderArrowSVG = (previous = false) => {
      return (
        <Arrow width="9" height="16" viewBox="0 -.5 9 16" xmlns="http://www.w3.org/2000/svg" previous={previous}><title>arrow</title><path d="M1 1l6.376 6.376L1.126 14" strokeWidth="2" stroke="#333" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"/></Arrow>
      );
    }

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
            <SlideList>
              { [1,2,3].map((button, i) =>
              <SlideListItem key={i} selected={i === 0} onClick={() => this.goToSlide(i)} />
              )}
            </SlideList>
          </SectionColumn>
          <SectionColumn text previousNext>
            <PreviousButton onClick={this.goToPreviousSlide}>
              <span>Previous</span>
              { renderArrowSVG(true) }
            </PreviousButton>
            <NextButton onClick={this.goToNextSlide}>
              <span>Next</span>
              { renderArrowSVG() }
            </NextButton>
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

const SlideList = styled.ol`
  counter-reset: section;
  list-style-type: none;
`;

const SlideListItem = styled.li`
  display: block;
  float: left;
  padding: 1rem .5rem;
  cursor: pointer;
  color: ${props => props.selected ? "black" : "white"};
  font-weight: 600;
  font-size: 1.3rem;

  &:first-child {
    margin-left: -.5rem;
  }

  &:before {
    counter-increment: section;
    content: counter(section);
  }
`;

const sharedPreviousNextStyles = `
  cursor: pointer;
  user-select: none;
  font-size: 1.3rem;
  letter-spacing: .3rem;
  text-transform: uppercase;
  padding: 1rem;

  &:hover {
    color: #666;

    svg path {
      stroke: ${primaryColor};
    }
  }

  @media screen and (max-width: ${columnBreakpoint}) {
    width: ${fingerWidth};
    height: ${fingerWidth};

    span {
      display: none;
    }
  }
`;

const PreviousButton = styled.div`
  ${sharedPreviousNextStyles}

  font-weight: 400;
  margin-left: -1rem;
  color: ${primaryColor};
`;

const NextButton = styled.div`
  ${sharedPreviousNextStyles}

  font-weight: 600;
  margin-right: -1rem;

  @media screen and (max-width: ${columnBreakpoint}) {
    margin-right: -${smallScreenMargins};
  }
`;

const Arrow = styled.svg`
  display: none;

  ${props => props.previous && "transform: rotate(180deg)"};

  @media screen and (max-width: ${columnBreakpoint}) {
    display: block;
  }
`;

export default Slideshow;
