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

  return (
    <p>
      { props.collectionName === "aidin" && props.showFirstColumn && // Aidin slides, first column
        <React.Fragment>
          For over two years I worked with
          <Space />
          <ExternalLink href="https://www.myaidin.com/">
            Aidin
            <ExternalLinkIcon />
          </ExternalLink>
          , an NYC-based healthcare company, to redesign and bring product thinking to their app. Aidin helps ease patient care transitions (say, moving from a hospital to a nursing home) by bringing quality data to the moment when patients choose where they want to receive their care.
          <br /><br />
          Together we rebuilt Aidin from
          <Space />
          <TextLink
            onClick={() => goToSlideByName('aidin-before-after')}
            selected={selectedSlideName === 'aidin-before-after'}
          >the ground up</TextLink>,
          rethinking how referrals are
          <Space />
          <TextLink
            onClick={() => goToSlideByName('aidin-sending-referral')}
            selected={selectedSlideName === 'aidin-sending-referral'}
          >sent</TextLink>,
          <Space />
          <TextLink
            onClick={() => goToSlideByName('aidin-receiving-referral')}
            selected={selectedSlideName === 'aidin-receiving-referral'}
          >received</TextLink>,
          and
          <Space />
          <TextLink
            onClick={() => goToSlideByName('aidin-referrals-dashboard')}
            selected={selectedSlideName === 'aidin-referrals-dashboard'}
          >managed</TextLink>,
          as well as exploring their future-forward
          <Space />
          <TextLink
            onClick={() => goToSlideByName('aidin-providers-dashboard')}
            selected={selectedSlideName === 'aidin-providers-dashboard'}
          >business goals</TextLink>.
        </React.Fragment>
      }
      { props.collectionName === "aidin" && props.showSecondColumn && // Aidin slides, second column
        <React.Fragment>
          <MediaQuery maxWidth={columnBreakpoint}>
            <br /><br />
          </MediaQuery>
          Aidin’s users are hospital case managers and provider intake coordinators that use Aidin all-day, every day, so it was important to do extensive
          <Space />
          <TextLink
            onClick={() => goToSlideByName('aidin-user-testing')}
            selected={selectedSlideName === 'aidin-user-testing'}
          >user testing</TextLink>,
          interviewing, demoing, and beta testing of our proposed solutions.
          <br /><br />
          After setting the vision, we moved into rebuilding the app. I managed our
          <Space />
          <TextLink
            onClick={() => goToSlideByName('aidin-project-management')}
            selected={selectedSlideName === 'aidin-project-management'}
          >roadmap</TextLink>,
          as well as our engineering team, providing project management, code review, and QA testing, while managing the full Aidin team’s evolving requirements and needs with agile development.
        </React.Fragment>
      }


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


      { props.collectionName === "freelance" && props.showFirstColumn && // Freelance slides, first column
        <React.Fragment>
          Before Genius I spent time freelancing, working on my own projects and with various companies in the U.S. and Europe. A personal site I enjoyed making was
          <Space />
          <TextLink
            onClick={() => goToSlideByName('freelance-table-manners')}
            selected={selectedSlideName === 'freelance-table-manners'}
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
            selected={selectedSlideName === 'freelance-mapsense'}
          >Mapsense</TextLink>,
          <Space />
          an innovative way of using maths
          <Space />
        </React.Fragment>
      }
      { props.collectionName === "freelance" && props.showSecondColumn && // Freelance slides, second column
        <React.Fragment>
          instead of images to provide maps online (since bought by Apple lol);
          <Space />
          <TextLink
            onClick={() => goToSlideByName('freelance-quinciple')}
            selected={selectedSlideName === 'freelance-quinciple'}
          >Quinciple</TextLink>,
          a local service that delivers food directly from farmers' markets;
          <Space />
          <TextLink
            onClick={() => goToSlideByName('freelance-clementine')}
            selected={selectedSlideName === 'freelance-clementine'}
          >Clementine Bakery</TextLink>,
          the first website for a friend's amazing vegan bakery, including cake orders and customization; and
          <Space />
          <TextLink
            onClick={() => goToSlideByName('freelance-hapide')}
            selected={selectedSlideName === 'freelance-hapide'}
          >Hapide</TextLink>,
          an accelerator backed by the UN to help young Albanians create startups.
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
