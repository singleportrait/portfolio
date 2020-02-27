import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import styled from 'styled-components/macro';

import geniusImage from './images/genius-homepage-after-matches-video.png';

import {
  Section, SectionColumn,
  SectionColumnLastParagraph, SectionColumnFirstParagraph,
  NextPreviousSectionColumn,
} from './Section';

import {
  columnBreakpoint, slideshowBreakpoint,
  smallScreenMargins,
  maxImageWidth, mediumScreenImageWidth, smallScreenImageWidth,
  primaryColor, linkColor, fingerWidth,
} from './Styles';

class Slideshow extends Component {

  goToSlide = (i) => {
    console.log("Going to slide", i);
  }

  goToSlideByName = (name) => {
    console.log("Going to slide", name);
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

    const geniusFirstColumn = () => {
      return (
        <React.Fragment>
          I was recently at&nbsp;
          <ExternalLink href="http://genius.com/">Genius</ExternalLink>
          , a crowdsourced lyrics site, annotation platform, and all-around music + tech company, from 2014 &ndash; 2017. While there I led our design team, both from the product &amp; branding sides. Over the course of a few years we rebranded from "Rap Genius" to "Genius", built a revolutionary&nbsp;
          <TextLink
            onClick={() => this.goToSlideByName('genius-web-annotator')}
            selected
          >web annotation platform</TextLink>,
          redesigned all of the core pieces of our site (including
        </React.Fragment>
      );
    }

    const geniusSecondColumn = () => {
      return (
        <React.Fragment>
          <TextLink
            onClick={() => this.goToSlideByName('genius-song-after')}
          >song/lyric pages</TextLink>,&nbsp;
          <TextLink
            onClick={() => this.goToSlideByName('genius-artist-after')}
          >artist &amp; user pages</TextLink>,&nbsp;
          <TextLink
            onClick={() => this.goToSlideByName('genius-homepage-after')}
          >homepage</TextLink>,&nbsp;
          and&nbsp;
          <TextLink
            onClick={() => this.goToSlideByName('genius-article-after')}
          >articles</TextLink>&nbsp;
          &mdash; on web and apps) as well as built out our&nbsp;
          <TextLink
            onClick={() => this.goToSlideByName('genius-marketing')}
          >marketing design department</TextLink>&nbsp;
          from the ground up. I worked across the team &amp; company to make sure everyone was satisfied and happy, and continually pushed us forward to stay up with the best design &amp; user interface standards.
        </React.Fragment>
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
          <NextPreviousSectionColumn text>
            <PreviousButton onClick={this.goToPreviousSlide}>
              <span>Previous</span>
              { renderArrowSVG(true) }
            </PreviousButton>
            <NextButton onClick={this.goToNextSlide}>
              <span>Next</span>
              { renderArrowSVG() }
            </NextButton>
          </NextPreviousSectionColumn>
        </Section>

        <Section text>
          <SectionColumn text>
            <p>Head of Design @ Genius</p>
            <SectionColumnLastParagraph>
              { geniusFirstColumn() }
            </SectionColumnLastParagraph>
          </SectionColumn>
          <SectionColumn text>
            <MediaQuery minWidth={columnBreakpoint}>
              <p>&nbsp;</p>
            </MediaQuery>
            <SectionColumnFirstParagraph>
              { geniusSecondColumn() }
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

const TextLink = styled.span`
  pointer-events: none;

  @media screen and (min-width: ${columnBreakpoint}) {
    text-decoration: underline;
    pointer-events: all;
    cursor: ${props => props.selected ? "default" : "pointer"};
    ${props => props.selected && `color: ${linkColor}`};
  }
`;

const ExternalLink = styled.a`
  white-space: nowrap;
`;

export default Slideshow;
