import React, { Component } from 'react';
import MediaQuery from 'react-responsive'
import styled from 'styled-components';

import {
  Section, SectionColumn,
  SectionColumnLastParagraph, SectionColumnFirstParagraph,
} from './Section';

import { columnBreakpoint } from './Styles';

class Slideshow extends Component {
  render() {
    return (
      <React.Fragment>
        <Section>
          <h2>Title</h2>
        </Section>

        <Section slideshow>
          <Slides>
            Slides
          </Slides>
        </Section>

        <Section>
          <SectionColumn>
            Buttons
          </SectionColumn>
        </Section>

        <Section text>
          <SectionColumn text>
            <p>Head of Design @ Genius</p>
            <SectionColumnLastParagraph>
              Description...
            </SectionColumnLastParagraph>
          </SectionColumn>
          <SectionColumn text>
            <MediaQuery minWidth={columnBreakpoint}>
              <p>&nbsp;</p>
            </MediaQuery>
            <SectionColumnFirstParagraph>
              ... continued text.
            </SectionColumnFirstParagraph>
          </SectionColumn>
        </Section>

      </React.Fragment>
    );
  }
}

const Slides = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  transition: left .3s ease;
  left: 0;
`;

export default Slideshow;
