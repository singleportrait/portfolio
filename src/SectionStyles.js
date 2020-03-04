import styled from 'styled-components/macro';

import {
  maxImageWidth,
  columnBreakpoint, slideshowBreakpoint,
  fingerWidth,
  mediumScreenSlideshowMargins, smallScreenMargins,
} from './Styles';

export const Section = styled.section`
  display: flex;
  max-width: ${maxImageWidth};
  margin: 0 auto;
  justify-content: space-between;
  position: relative;

  ${props => props.slideshow && `
    overflow: hidden;
    max-width: none;
  `}

  ${props => props.header && `
    margin-top: 2rem;
    margin-bottom: .5rem;
  `}

  @media screen and (max-width: ${slideshowBreakpoint}) {
    ${props => !props.slideshow && `margin: 0 ${mediumScreenSlideshowMargins}`};

    ${props => props.header && "margin-top: 1rem;"}
  }

  @media screen and (max-width: ${columnBreakpoint}) {
    ${props => !props.slideshow && `margin: 0 ${smallScreenMargins}`};

    ${props => props.text && "flex-direction: column;"}

    ${props => props.header && "margin-top: 1rem;"}
  }
`

export const SectionColumn = styled.div`
  position: relative;
  width: ${props => props.text ? "calc(50% - 2rem)" : "50%"};

  ${props => props.intro && "margin-bottom: 1rem;"}

  @media screen and (max-width: ${columnBreakpoint}) {
    width: ${props => props.text ? `calc(100% - ${fingerWidth})` : "auto"};
  }
`

export const NextPreviousSectionColumn = styled(SectionColumn)`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${columnBreakpoint}) {
    width: auto;
    justify-content: flex-end;
`;
