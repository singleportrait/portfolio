import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import Hammer from 'react-hammerjs';

import SlideshowArrowIcon from './SlideshowArrowIcon';
import SlideshowText from './SlideshowText';

import {
  Section, SectionColumn,
  SectionColumnLastParagraph, SectionColumnFirstParagraph,
  NextPreviousSectionColumn,
} from './SectionStyles';

import {
  Slides, Slide, SlideImage,
  SlideVideo, SlideImagePlaceholder,
  SlideList, SlideListItem,
  PreviousButton, NextButton,
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

  /* TODO: Can only get the animation to work with the swipe on mobile by manually
   * setting to false in each of the functions. Argh! But, will figure it out,
   * or just do it the ugly way, ah well.
   */
  useEffect(() => {
    console.log("Endcap transition running");
    // setTimeout(setEndcapAnimation(false), 300);
  }, [endcapAnimation]);

  function goToSlide(i) {
    console.log("Going to slide", i);
    setEndcapAnimation(false);

    setCurrentSlide(i);
  }

  function goToPreviousSlide() {
    console.log("Going to previous slide");
    setEndcapAnimation(false);

    let newSlide = currentSlide - 1;
    if (newSlide < 0) {
      newSlide = props.collection.slides.length - 1;
      setEndcapAnimation(true);
    }

    setCurrentSlide(newSlide);
  }

  function goToNextSlide() {
    console.log("Going to next slide");
    setEndcapAnimation(false);

    let newSlide = currentSlide + 1;
    if (newSlide >= props.collection.slides.length) {
      newSlide = 0;
      setEndcapAnimation(true);
    }

    setCurrentSlide(newSlide);
  }

  // Swipe handlers for switching slides
  // I wanted to use react-swipeable, but neither the hooks nor the
  // component were letting me swipe more than once, or at all
  function handleSwipe(e) {
    if (e.direction === 2) { // Swiping left
      goToNextSlide();
    } else if (e.direction === 4) { // Swiping right
      goToPreviousSlide();
    }
  }

  return (
    <React.Fragment>
      <Section header>
        <h2>{ props.collection.title }</h2>
      </Section>

      <Section slideshow>
        <Hammer
          onSwipe={handleSwipe}
          options={{
            recognizers: {
              swipe: {
                velocity: .1,
              }
            }
          }}
        >
          <Slides
            style={{left: currentSlide * -100 + "%"}}
            endcapAnimation={endcapAnimation}
          >
            { props.collection.slides.map((slide, i) =>
              <Slide key={i}>
                { slide.type === 'image' &&
                  <SlideImage src={slide.src} alt={slide.alt || "Jenn Scheer – Portfolio Image"} />
                }
                { slide.type === 'video' &&
                  <div>
                    <SlideVideo
                      as="video"
                      src={slide.videoSrc}
                      autoPlay
                      muted
                      playsInline
                      loop
                    />
                    <SlideImagePlaceholder src={slide.src} alt={slide.alt || "Jenn Scheer – Portfolio Image"} />
                  </div>
                }
              </Slide>
            )}
          </Slides>
        </Hammer>
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
            <SlideshowText
              firstColumn
              collectionName={props.collection.key}
              slides={props.collection.slides}
              currentSlide={[currentSlide, setCurrentSlide]}
              setEndcapAnimation={setEndcapAnimation}
            />
          </SectionColumnLastParagraph>
        </SectionColumn>
        <SectionColumn text>
          <MediaQuery minWidth={columnBreakpoint}>
            <p>&nbsp;</p>
          </MediaQuery>
          <SectionColumnFirstParagraph>
            <SlideshowText
              secondColumn
              collectionName={props.collection.key}
              slides={props.collection.slides}
              currentSlide={[currentSlide, setCurrentSlide]}
              setEndcapAnimation={setEndcapAnimation}
            />
          </SectionColumnFirstParagraph>
        </SectionColumn>
      </Section>
    </React.Fragment>
  );
}
