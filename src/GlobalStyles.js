import { createGlobalStyle } from 'styled-components';

import {
  slideshowBreakpoint, columnBreakpoint, fingerWidth,
  gradientStartColor, gradientEndColor,
} from './Styles';

export const GlobalStyles = createGlobalStyle`
  html {
    background: linear-gradient(${gradientStartColor}, ${gradientEndColor});
    background-attachment: fixed;
    background-size: cover;
    height: 101%;
  }

  html:before {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 0;
    background-color: #fff;
    content: " ";
    z-index: -1;

    @media screen and (max-width: ${columnBreakpoint}) {
      width: ${fingerWidth};
      left: calc(100vw - ${fingerWidth});
    }
  }

  p {
    @media screen and (max-width: ${slideshowBreakpoint}) {
      font-size: .9rem;
    }
  }
`
