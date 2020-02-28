import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import Hammer from 'react-hammerjs';

import SlideshowArrowIcon from './SlideshowArrowIcon';
import ExternalLinkIcon from './ExternalLinkIcon';

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

  // A breaking space, to put between elements within the text
  function Space() {
    return (
      <React.Fragment>&#32;</React.Fragment>
    );
  }

  // Manually-coded text to include links to individual slides
  const geniusFirstColumn = () => {
    return (
      <React.Fragment>
        I was recently at
        <Space />
        <ExternalLink href="http://genius.com/">
          Genius
          <ExternalLinkIcon />
        </ExternalLink>
        , a crowdsourced lyrics site, annotation platform, and all-around music + tech company, from 2014 &ndash; 2017. While there I led our design team, both from the product &amp; branding sides. Over the course of a few years we rebranded from "Rap Genius" to "Genius", built a revolutionary
        <Space />
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
        >song/lyric pages</TextLink>,
        <Space />
        <TextLink
          onClick={() => goToSlideByName('genius-artist-after')}
          selected={props.collection.slides[currentSlide].name === 'genius-artist-after'}
        >artist &amp; user pages</TextLink>,
        <Space />
        <TextLink
          onClick={() => goToSlideByName('genius-homepage-after')}
          selected={props.collection.slides[currentSlide].name === 'genius-homepage-after'}
        >homepage</TextLink>,
        <Space />
        and
        <Space />
        <TextLink
          onClick={() => goToSlideByName('genius-article-after')}
          selected={props.collection.slides[currentSlide].name === 'genius-article-after'}
        >articles</TextLink>
        <Space />
        &mdash; on web and apps) as well as built out our
        <TextLink
          onClick={() => goToSlideByName('genius-marketing')}
          selected={props.collection.slides[currentSlide].name === 'genius-marketing'}
        >marketing design department</TextLink>
        <Space />
        from the ground up. I worked across the team &amp; company to make sure everyone was satisfied and happy, and continually pushed us forward to stay up with the best design &amp; user interface standards.
      </React.Fragment>
    );
  }

  const aidinFirstColumn = () => {
    return (
      <React.Fragment>
        Over 6 months, I worked with Aidin, an NYC-based healthcare company, to redesign and bring product thinking to their app. Aidin helps ease patient care transitions (say, moving from a hospital to a nursing home) by bringing quality data to the moment when patients choose where they want to receive their care.
        <br /><br />
        Together we rebuilt Aidin from the ground up, rethinking how referrals are sent, received, and managed, as well as
      </React.Fragment>
    );
  }

  const aidinSecondColumn = () => {
    return (
      <React.Fragment>
        exploring their future-forward business goals. Aidin’s users are hospital case managers and provider intake coordinators that use Aidin all-day, every day, so it was important to do extensive user testing, interviewing, and demoing of our proposed solutions as we progressed.
        <br /><br />
        I’m continuing to work with them through development, providing project management, design consultation, code review, and QA testing as the project moves into reality.
      </React.Fragment>
    );
  }

  const freelanceFirstColumn = () => {
    return (
      <React.Fragment>
        Before Genius I spent time freelancing, working on my own projects and with various companies in the U.S. and Europe. A personal site I enjoyed making was
        <Space />
        <TextLink
          onClick={() => goToSlideByName('freelance-table-manners')}
          selected={props.collection.slides[currentSlide].name === 'freelance-table-manners'}
        >Table Manners</TextLink>,
        <Space />
        which brought a 30-year-old text on etiquette and dining to the internet, complete with
        <Space />
        <ExternalLink href="http://tablemanners.us">
          self-quiz
          <ExternalLinkIcon />
        </ExternalLink>.
        <Space />
        And, some of the more exciting external projects I worked on were:
        <Space />
        <TextLink
          onClick={() => goToSlideByName('freelance-mapsense')}
          selected={props.collection.slides[currentSlide].name === 'freelance-mapsense'}
        >Mapsense</TextLink>,
        <Space />
        an innovative way of using maths
      </React.Fragment>
    );
  }

  const freelanceSecondColumn = () => {
    return (
      <React.Fragment>
        instead of images to provide maps online (since bought by Apple lol);
        <Space />
        <TextLink
          onClick={() => goToSlideByName('freelance-quinciple')}
          selected={props.collection.slides[currentSlide].name === 'freelance-quinciple'}
        >Quinciple</TextLink>,
        a local service that delivers food directly from farmers' markets;
        <Space />
        <TextLink
          onClick={() => goToSlideByName('freelance-clementine')}
          selected={props.collection.slides[currentSlide].name === 'freelance-clementine'}
        >Clementine Bakery</TextLink>,
        the first website for a friend's amazing vegan bakery, including cake orders and customization; and
        <Space />
        <TextLink
          onClick={() => goToSlideByName('freelance-hapide')}
          selected={props.collection.slides[currentSlide].name === 'freelance-hapide'}
        >Hapide</TextLink>,
        an accelerator backed by the UN to help young Albanians create startups.
      </React.Fragment>
    );
  }

  const refinery29FirstColumn = () => {
    return (
      <React.Fragment>
        After moving to New York I began interning at
        <Space />
        <ExternalLink href="http://refinery29.com/">
          Refinery29
          <ExternalLinkIcon />
        </ExternalLink>, the leading fashion &amp; lifestyle platform for women, as a graphic design intern. From there I took an unexpected leap to being the first member of their newfound tech team under their first CTO. I started knowing a bit of HTML and slowly (it felt very fast) built off that knowledge to become a full-stack PHP developer, moving the site from years-old MovableType code to a custom framework. We built every page on the site from
      </React.Fragment>
    );
  }

  const refinery29SecondColumn = () => {
    return (
      <React.Fragment>
        scratch, as well as new features like a
        <Space />
        <TextLink
          onClick={() => goToSlideByName('refinery29-street-style')}
          selected={props.collection.slides[currentSlide].name === 'refinery29-street-style'}
        >street style hub</TextLink>,
        <Space />
        <TextLink
          onClick={() => goToSlideByName('refinery29-weddings')}
          selected={props.collection.slides[currentSlide].name === 'refinery29-weddings'}
        >event guides</TextLink>,
        <Space />
        <TextLink
          onClick={() => goToSlideByName('refinery29-festival-tracker')}
          selected={props.collection.slides[currentSlide].name === 'refinery29-festival-tracker'}
        >live festival trackers</TextLink>,
        video landing pages, and robust email- and partnerships-building internal tools. The team, tech and company-wide, grew quickly, and I happily became a person people could ask questions about all layers of the stack. I still have friends that work there today; they say they know of me from my
        <Space />
        <ExternalLink href="http://github.com/singleportrait/">
          github username
          <ExternalLinkIcon />
        </ExternalLink>
        <Space />
        , which they still see sprinkled throughout the code. 😱
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Section header>
        <h2>{ props.collection.title }</h2>
      </Section>

      <Section slideshow>
        <Hammer onSwipe={handleSwipe}>
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
            { props.collection.key === "genius" && geniusFirstColumn() }
            { props.collection.key === "aidin" && aidinFirstColumn() }
            { props.collection.key === "freelance" && freelanceFirstColumn() }
            { props.collection.key === "refinery29" && refinery29FirstColumn() }
          </SectionColumnLastParagraph>
        </SectionColumn>
        <SectionColumn text>
          <MediaQuery minWidth={columnBreakpoint}>
            <p>&nbsp;</p>
          </MediaQuery>
          <SectionColumnFirstParagraph>
            { props.collection.key === "genius" && geniusSecondColumn() }
            { props.collection.key === "aidin" && aidinSecondColumn() }
            { props.collection.key === "freelance" && freelanceSecondColumn() }
            { props.collection.key === "refinery29" && refinery29SecondColumn() }
          </SectionColumnFirstParagraph>
        </SectionColumn>
      </Section>
    </React.Fragment>
  );
}
