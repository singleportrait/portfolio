import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive'

import SlideshowArrowIcon from './SlideshowArrowIcon';
import ExternalLinkIcon from './ExternalLinkIcon';

import {
  Section, SectionColumn,
  SectionColumnLastParagraph, SectionColumnFirstParagraph,
  NextPreviousSectionColumn,
} from './SectionStyles';

import {
  Slides, Slide, SlideImage,
  SlideList, SlideListItem,
  PreviousButton, NextButton,
  TextLink, ExternalLink
} from './SlideshowStyles';

import { columnBreakpoint } from './Styles';

export default function Slideshow(props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [endcapAnimation, setEndcapAnimation] = useState(false);

  /* Set the endcap animation back to false any time it gets set to true.
   * When going from slides 7-8, for instance, if we rely on the new slide
   * number to show the animation, then it will run that special endcap
   * transition immediately, when we want the endcap one only *after* the
   * transition is complete.
   *
   * Instead, we rely on this state being set to 'true' to show the animation,
   * but then re-set the transition to the regular one after the transition is
   * started, keeping the number small to 'beat' fast user interactions (.3s);
   */
  useEffect(() => {
    console.log("Endcap transition running");
    setTimeout(setEndcapAnimation(false), 300);
  }, [endcapAnimation]);

  function goToSlide(i) {
    console.log("Going to slide", i);

    setCurrentSlide(i);
  }

  function goToSlideByName(name) {
    console.log("Going to slide", name);

    const newSlideIndex = props.collection.slides.findIndex(slide => slide.name === name);

    setCurrentSlide(newSlideIndex);
  }

  function goToPreviousSlide() {
    console.log("Going to previous slide");

    let newSlide = currentSlide - 1;
    if (newSlide < 0) {
      newSlide = props.collection.slides.length - 1;
      setEndcapAnimation(true);
    }

    setCurrentSlide(newSlide);
  }

  function goToNextSlide() {
    console.log("Going to next slide");

    let newSlide = currentSlide + 1;
    if (newSlide >= props.collection.slides.length) {
      newSlide = 0;
      setEndcapAnimation(true);
    }

    setCurrentSlide(newSlide);
  }

  // Manually-coded text to include links to individual slides
  const geniusFirstColumn = () => {
    return (
      <React.Fragment>
        I was recently at&nbsp;
        <ExternalLink href="http://genius.com/">
          Genius
          <ExternalLinkIcon />
        </ExternalLink>
        , a crowdsourced lyrics site, annotation platform, and all-around music + tech company, from 2014 &ndash; 2017. While there I led our design team, both from the product &amp; branding sides. Over the course of a few years we rebranded from "Rap Genius" to "Genius", built a revolutionary&nbsp;
        <TextLink
          onClick={() => goToSlideByName('genius-web-annotator')}
          selected={props.collection.slides[currentSlide].name === 'genius-web-annotator'}
        >web annotation platform</TextLink>,
        redesigned all of the core pieces of our site (including
      </React.Fragment>
    );
  }

  const geniusSecondColumn = () => {
    return (
      <React.Fragment>
        <TextLink
          onClick={() => goToSlideByName('genius-song-after')}
          selected={props.collection.slides[currentSlide].name === 'genius-song-after'}
        >song/lyric pages</TextLink>,&nbsp;
        <TextLink
          onClick={() => goToSlideByName('genius-artist-after')}
          selected={props.collection.slides[currentSlide].name === 'genius-artist-after'}
        >artist &amp; user pages</TextLink>,&nbsp;
        <TextLink
          onClick={() => goToSlideByName('genius-homepage-after')}
          selected={props.collection.slides[currentSlide].name === 'genius-homepage-after'}
        >homepage</TextLink>,&nbsp;
        and&nbsp;
        <TextLink
          onClick={() => goToSlideByName('genius-article-after')}
          selected={props.collection.slides[currentSlide].name === 'genius-article-after'}
        >articles</TextLink>&nbsp;
        &mdash; on web and apps) as well as built out our&nbsp;
        <TextLink
          onClick={() => goToSlideByName('genius-marketing')}
          selected={props.collection.slides[currentSlide].name === 'genius-marketing'}
        >marketing design department</TextLink>&nbsp;
        from the ground up. I worked across the team &amp; company to make sure everyone was satisfied and happy, and continually pushed us forward to stay up with the best design &amp; user interface standards.
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Section header>
        <h2>{ props.collection.title }</h2>
      </Section>

      <Section slideshow>
        <Slides
          style={{left: currentSlide * -100 + "%"}}
          endcapAnimation={endcapAnimation}
        >
          { props.collection.slides.map((slide, i) =>
            <Slide key={i}>
              <SlideImage src={slide.src} alt={slide.alt || "Jenn Scheer – Portfolio Image"} />
            </Slide>
          )}
        </Slides>
      </Section>

      <Section>
        <SectionColumn>
          <SlideList>
            { props.collection.slides.map((slide, i) =>
            <SlideListItem
              key={i}
              selected={i === currentSlide}
              onClick={() => goToSlide(i)}
            />
            )}
          </SlideList>
        </SectionColumn>
        <NextPreviousSectionColumn text>
          <PreviousButton onClick={goToPreviousSlide}>
            <span>Previous</span>
            <SlideshowArrowIcon previous />
          </PreviousButton>
          <NextButton onClick={goToNextSlide}>
            <span>Next</span>
            <SlideshowArrowIcon />
          </NextButton>
        </NextPreviousSectionColumn>
      </Section>

      <Section text>
        <SectionColumn text>
          <p>{ props.collection.role }</p>
          <SectionColumnLastParagraph>
            { geniusFirstColumn() }
          </SectionColumnLastParagraph>
        </SectionColumn>
        <SectionColumn text>
          <MediaQuery minWidth={columnBreakpoint}>
            <p>&nbsp;</p>
          </MediaQuery>
          <SectionColumnFirstParagraph>
            { geniusSecondColumn() }
          </SectionColumnFirstParagraph>
        </SectionColumn>
      </Section>
    </React.Fragment>
  );
}
