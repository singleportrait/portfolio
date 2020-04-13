import { createGlobalStyle } from 'styled-components';

import {
  slideshowBreakpoint, columnBreakpoint, fingerWidth,
  gradientStartColor, gradientEndColor,
  primaryColor,
} from './Styles';

export const GlobalStyles = createGlobalStyle`
  ::selection {
    background: ${primaryColor}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${primaryColor}; /* Gecko Browsers */
  }

  html {
    background-image: linear-gradient(185deg, ${gradientStartColor} 3%, ${gradientEndColor} 100%);
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
    background: #fff;
    content: " ";
    z-index: -1;

    @media screen and (max-width: ${columnBreakpoint}) {
      background: #fff;
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
