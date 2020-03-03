import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ExternalLinkIcon from './ExternalLinkIcon';

import {
  TextLink, ExternalLink
} from './SlideshowStyles';

export default function GeniusText(props) {
  const [currentSlide, setCurrentSlide] = props.currentSlide;
  const [endcapAnimation, setEndcapAnimation] = props.endcapAnimation;
  const selectedSlideName = props.slides[currentSlide].name;

  function Space() {
    return (
      <React.Fragment>&#32;</React.Fragment>
    );
  }

  function goToSlideByName(name) {
    console.log("Going to slide", name);
    setEndcapAnimation(false);

    const newSlideIndex = props.slides.findIndex(slide => slide.name === name);

    setCurrentSlide(newSlideIndex);
  }

  return (
    <React.Fragment>
      { props.firstColumn &&
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
            selected={selectedSlideName === 'genius-web-annotator'}
          >web annotation platform</TextLink>,
          redesigned all of the core pieces of our site (including
        </React.Fragment>
      }
      { props.secondColumn &&
        <React.Fragment>
          <TextLink
            onClick={() => goToSlideByName('genius-song-after')}
            selected={selectedSlideName === 'genius-song-after'}
          >song/lyric pages</TextLink>,
          <Space />
          <TextLink
            onClick={() => goToSlideByName('genius-artist-after')}
            selected={selectedSlideName === 'genius-artist-after'}
          >artist &amp; user pages</TextLink>,
          <Space />
          <TextLink
            onClick={() => goToSlideByName('genius-homepage-after')}
            selected={selectedSlideName === 'genius-homepage-after'}
          >homepage</TextLink>,
          <Space />
          and
          <Space />
          <TextLink
            onClick={() => goToSlideByName('genius-article-after')}
            selected={selectedSlideName === 'genius-article-after'}
          >articles</TextLink>
          <Space />
          &mdash; on web and apps) as well as built out our
          <Space />
          <TextLink
            onClick={() => goToSlideByName('genius-marketing')}
            selected={selectedSlideName === 'genius-marketing'}
          >marketing design department</TextLink>
          <Space />
          from the ground up. I worked across the team &amp; company to make sure everyone was satisfied and happy, and continually pushed us forward to stay up with the best design &amp; user interface standards.
        </React.Fragment>
      }
    </React.Fragment>
  );
}

GeniusText.propTypes = {
  currentSlide: PropTypes.array.isRequired,
  endcapAnimation: PropTypes.array.isRequired,
};
