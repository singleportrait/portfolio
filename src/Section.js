import styled from 'styled-components';

import {
  maxImageWidth,
  columnBreakpoint, slideshowBreakpoint,
  fingerWidth,
  mediumScreenSlideshowMargins, smallScreenMargins,
} from './Styles';
// import * as styles from './Variables';

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

  @media screen and (max-width: ${slideshowBreakpoint}) {
    margin: 0 ${mediumScreenSlideshowMargins};
  }

  @media screen and (max-width: ${columnBreakpoint}) {
    margin: 0 ${smallScreenMargins};
    ${props => props.text && "flex-direction: column;"}
  }

`

export const SectionColumn = styled.div`
  position: relative;
  width: ${props => props.text ? "calc(50% - 2rem)" : "50%"};

  @media screen and (max-width: ${columnBreakpoint}) {
    width: ${props => props.text ? `calc(100vw - ${fingerWidth})` : "auto"};
  }
`

export const SectionColumnLastParagraph = styled.p`
  @media screen and (max-width: ${columnBreakpoint}) {
    margin-bottom: 0;
  }
`;

export const SectionColumnFirstParagraph = styled.p`
  @media screen and (max-width: ${columnBreakpoint}) {
    margin-top: 0;
  }
`;
