import styled from 'styled-components/macro';

import {
  maxImageWidth,
  columnBreakpoint, slideshowBreakpoint,
  fingerWidth,
  mediumScreenSlideshowMargins, smallScreenMargins,
  ifNarrowerThan,
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

  ${props => props.header && `
    margin-top: 2rem;
    margin-bottom: .5rem;
  `}

  ${ifNarrowerThan(slideshowBreakpoint)} {
    ${props => !props.slideshow && `margin: 0 ${mediumScreenSlideshowMargins}`};

    ${props => props.header && "margin-top: 1rem;"}
  }

  ${ifNarrowerThan(columnBreakpoint)} {
    ${props => !props.slideshow && `margin: 0 ${smallScreenMargins}`};

    ${props => props.text && "flex-direction: column;"}

    ${props => props.header && "margin-top: 1rem;"}
  }
`

export const SectionColumn = styled.div`
  position: relative;
  width: ${props => props.text ? "calc(50% - 2rem)" : "50%"};
  ${props => props.previousNext && "display: flex;"};
  ${props => props.previousNext && "justify-content: space-between;"};

  ${ifNarrowerThan(columnBreakpoint)} {
    width: ${props => props.text && !props.previousNext ? `calc(100vw - ${fingerWidth})` : "auto"};
    ${props => props.previousNext && "justify-content: flex-end;" };
  }
`

export const SectionColumnLastParagraph = styled.p`
  ${ifNarrowerThan(columnBreakpoint)} {
    margin-bottom: 0;
  }
`;

export const SectionColumnFirstParagraph = styled.p`
  ${ifNarrowerThan(columnBreakpoint)} {
    margin-top: 0;
  }
`;
