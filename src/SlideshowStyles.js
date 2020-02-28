import styled from 'styled-components/macro';

import {
  columnBreakpoint, slideshowBreakpoint,
  smallScreenMargins,
  maxImageWidth, mediumScreenImageWidth, smallScreenImageWidth,
  primaryColor, linkColor, fingerWidth,
  mediumScreenSlideshowMargins, smallScreenSlideshowMargins,
} from './Styles';

const imageRatio = '.695555556';

export const Slides = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  transition: left .3s ease;
  left: 0;
  ${props => props.endcapAnimation && "transition: left .7s cubic-bezier(0.5, -0.15, 0.72, 0.07) 0ms"};
`;

export const Slide = styled.div`
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

export const SlideImage = styled.img`
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

const sharedSlideVideoImageStyles = `
  position: absolute;
  left: calc((99vw - ${maxImageWidth}) / 2);

  @media screen and (max-width: ${slideshowBreakpoint}) {
    left: ${mediumScreenSlideshowMargins};
  }

  @media screen and (max-width: ${columnBreakpoint}) {
    left: ${smallScreenSlideshowMargins};
  }
`;

export const SlideVideo = styled(SlideImage)`
  ${sharedSlideVideoImageStyles}

  top: ${(40 / 626) * 100 + "%"}; // Percentage down from top of browser frame
  z-index: 1;
`;

export const SlideImagePlaceholder = styled(SlideImage)`
  ${sharedSlideVideoImageStyles}

  top: 0;
  z-index: 0;
`;

export const SlideList = styled.ol`
  counter-reset: section;
  list-style-type: none;
`;

export const SlideListItem = styled.li`
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

export const PreviousButton = styled.div`
  ${sharedPreviousNextStyles}

  font-weight: 400;
  margin-left: -1rem;
  color: ${primaryColor};
`;

export const NextButton = styled.div`
  ${sharedPreviousNextStyles}

  font-weight: 600;
  margin-right: -1rem;

  @media screen and (max-width: ${columnBreakpoint}) {
    margin-right: -${smallScreenMargins};
  }
`;

export const TextLink = styled.span`
  pointer-events: none;

  @media screen and (min-width: ${columnBreakpoint}) {
    text-decoration: underline;
    pointer-events: all;
    cursor: ${props => props.selected ? "default" : "pointer"};
    ${props => props.selected && `color: ${linkColor}`};
  }
`;

export const ExternalLink = styled.a`
  white-space: nowrap;
`;
