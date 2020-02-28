import React from 'react';
import styled from 'styled-components';

export default function ExternalLinkIcon(props) {
  return (
    <Icon width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg"><title>External Link</title><g stroke="#333" strokeWidth="1.25" fill="none" fillRule="evenodd" strokeLinecap="round"><path d="M9 5.5v2.667C9 8.903 8.403 9.5 7.667 9.5H2.333C1.597 9.5 1 8.903 1 8.167V2.833C1 2.097 1.597 1.5 2.333 1.5H5M6.91.758h2.754v2.747" strokeLinejoin="round"/><path d="M9.5 1l-4 4"/></g></Icon>
  );
}

const Icon = styled.svg`
  position: relative;
  margin-left: .3rem;
  top: .05rem;
`;
