import styled from 'styled-components';

import {
  maxImageWidth,
  columnBreakpoint, slideshowBreakpoint,
  fingerWidth,
  mediumScreenSlideshowMargins, smallScreenMargins,
} from './Variables';
// import * as styles from './Variables';

export const Section = styled.section`
  display: flex;
  max-width: ${maxImageWidth};
  margin: 0 auto;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: ${slideshowBreakpoint}) {
    margin: 0 ${mediumScreenSlideshowMargins};
  }

  @media screen and (max-width: ${columnBreakpoint}) {
    margin: 0 ${smallScreenMargins};
  }

`

export const SectionColumn = styled.div`
  position: relative;
  width: ${props => props.text ? "calc(50% - 2rem)" : "50%"};

  @media screen and (max-width: ${columnBreakpoint}) {
    width: ${props => props.text ? `calc(100vw - ${fingerWidth})` : "auto"};
    ${props => props.wideScreensOnly && "display: none;"}
  }
`
