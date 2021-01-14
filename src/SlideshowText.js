import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

import ExternalLinkIcon from './ExternalLinkIcon';

import { columnBreakpoint } from './Styles';

import {
  TextLink, ExternalLink
} from './SlideshowStyles';

export default function SlideshowText(props) {
  const [currentSlide, setCurrentSlide] = props.currentSlide;
  const setEndcapAnimation = props.setEndcapAnimation;
  const selectedSlideName = props.slides[currentSlide].name;

  function Space() {
    return (
      <React.Fragment>&#32;</React.Fragment>
    );
  }

  function goToSlideByName(name) {
    setEndcapAnimation(false);

    const newSlideIndex = props.slides.findIndex(slide => slide.name === name);

    setCurrentSlide(newSlideIndex);
  }

  function ColumnText(props) {
    const fragment = props.fragment;
    return (
      <>
        { fragment.text && fragment.text }
        { fragment.link &&
          <>
            <Space />
            { fragment.link.externalLink &&
              <ExternalLink href={fragment.link.target}>
                {fragment.link.text}
                <ExternalLinkIcon />
              </ExternalLink>
            }
            { !fragment.link.externalLink &&
              <TextLink
                onClick={() => goToSlideByName(fragment.link.target)}
                selected={selectedSlideName === fragment.link.target}
              >{fragment.link.text}</TextLink>
            }
            { !fragment.link.followWithComma && <Space/> }
          </>
        }
        { fragment.break && <><br /><br /></> }
        { fragment.mobileBreak &&
          <MediaQuery maxWidth={columnBreakpoint}>
            <br /><br />
          </MediaQuery>
        }
      </>
    );
  }

  return (
    <p>
      {props.firstColumn && props.firstColumn.map((fragment, key) =>
        <ColumnText fragment={fragment} key={key} />
      )}

      {props.secondColumn && props.secondColumn.map((fragment, key) =>
        <ColumnText fragment={fragment} key={key} />
      )}



      { props.collectionName === "genius" && props.showFirstColumn && // Genius slides, first column
        <React.Fragment>
          I worked at
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
          <Space />
        </React.Fragment>
      }

      { props.collectionName === "genius" && props.showSecondColumn && // Genius slides, second column
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



      { props.collectionName === "refinery29" && props.showFirstColumn && // Refinery29 slides, first column
        <React.Fragment>
          After moving to New York I began interning at
          <Space />
          <ExternalLink href="http://refinery29.com/">
            Refinery29
            <ExternalLinkIcon />
          </ExternalLink>, the leading fashion &amp; lifestyle platform for women, as a graphic design intern. From there I took an unexpected leap to being the first member of their newfound tech team under their first CTO. I started knowing a bit of HTML and slowly (it felt very fast) built off that knowledge to become a full-stack PHP developer, moving the site from years-old MovableType code to a custom framework. We built every page on the site from
          <Space />
        </React.Fragment>
      }

      { props.collectionName === "refinery29" && props.showSecondColumn && // Refinery29 slides, second column
        <React.Fragment>
          scratch, as well as new features like a
          <Space />
          <TextLink
            onClick={() => goToSlideByName('refinery29-street-style')}
            selected={selectedSlideName === 'refinery29-street-style'}
          >street style hub</TextLink>,
          <Space />
          <TextLink
            onClick={() => goToSlideByName('refinery29-weddings')}
            selected={selectedSlideName === 'refinery29-weddings'}
          >event guides</TextLink>,
          <Space />
          <TextLink
            onClick={() => goToSlideByName('refinery29-festival-tracker')}
            selected={selectedSlideName === 'refinery29-festival-tracker'}
          >live festival trackers</TextLink>,
          video landing pages, and robust email- and partnerships-building internal tools. The team, tech and company-wide, grew quickly, and I happily became a person people could ask questions about all layers of the stack. I still have friends that work there today; they say they know of me from my
          <Space />
          <ExternalLink href="http://github.com/singleportrait/">
            github username
            <ExternalLinkIcon />
          </ExternalLink>,
          <Space />
          which they still see sprinkled throughout the code. 😱
        </React.Fragment>
      }
    </p>
  );
}

SlideshowText.propTypes = {
  currentSlide: PropTypes.array.isRequired,
  setEndcapAnimation: PropTypes.func.isRequired,
};
