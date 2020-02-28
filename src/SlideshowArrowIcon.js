import React from 'react';
import styled from 'styled-components';

import { columnBreakpoint } from './Styles';

export default function SlideshowArrowIcon(props) {
  return (
    <Arrow width="9" height="16" viewBox="0 -.5 9 16" xmlns="http://www.w3.org/2000/svg" previous={!!props.previous}><title>arrow</title><path d="M1 1l6.376 6.376L1.126 14" strokeWidth="2" stroke="#333" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"/></Arrow>
  );
}

const Arrow = styled.svg`
  display: none;

  ${props => props.previous && "transform: rotate(180deg)"};

  @media screen and (max-width: ${columnBreakpoint}) {
    display: block;
  }
`;
