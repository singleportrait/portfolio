export const SLIDES = [
  /*
  {
    key: 'slug',
    title: 'Project Title',
    role: 'My Role',
    slides: [
      {
        name: 'slide-image-name',
        type: 'video', // video or image
        src: './images/slide-name.webp',
        videoSrc: 'AWS link', // Only if it's type video
        alt: 'Alt text'
      },
    ],
    firstColumnText: [
    ],
    secondColumnText: [
    ],
  },
  */
  // {
  //   link: {
  //     text: "",
  //     target: "",
  //     noSpaceAfter: true,
  //     externalLink: true,
  //   },
  // },
  // { text: "" },
  // { break: true },
  // { mobileBreak: true },

  {
    key: "tables-for-two",
    title: "Tables for Two",
    role: "Design & Development",
    slides: [
      {
        name: "tables-for-two-overview",
        type: "video",
        src: "./images/tables-for-two/tables-for-two-overview.webp",
        videoSrc:
          "https://js-portfolio-2017.s3.amazonaws.com/tables-for-two-overview-video-compressed.mp4",
        alt: "Tables for Two Restaurant Review App",
      },
      {
        name: "tables-for-two-homepage",
        type: "image",
        src: "./images/tables-for-two/tables-for-two-homepage.png",
        alt: "Tables for Two Homepage",
      },
      {
        name: "tables-for-two-restaurant",
        type: "image",
        src: "./images/tables-for-two/tables-for-two-restaurant.png",
        alt: "Tables for Two Restaurant",
      },
      {
        name: "tables-for-two-list",
        type: "image",
        src: "./images/tables-for-two/tables-for-two-list.png",
        alt: "Tables for Two List View",
      },
      {
        name: "tables-for-two-admin",
        type: "image",
        src: "./images/tables-for-two/tables-for-two-admin.webp",
        alt: "Tables for Two Admin",
      },
      {
        name: "tables-for-two-github-action",
        type: "image",
        src: "./images/tables-for-two/tables-for-two-github-action.webp",
        alt: "Tables for Two Github Action",
      },
    ],
    firstColumnText: [
      {
        text: "This is a personal project I’d long wanted to make.",
      },
      {
        link: {
          text: "Tables for Two",
          target: "https://tablesfortwo.nyc",
          externalLink: true,
        },
      },
      {
        text: "is a map app that gathers all of the New Yorker Magazine’s weekly",
      },
      {
        link: {
          text: "restaurant reviews",
          target: "https://www.newyorker.com/magazine/tables-for-two",
          externalLink: true,
        },
      },
      {
        text: "into one handy place. I’ve always enjoyed their reviews: unexpected picks, open-mindedness, and often a bit of cheeky NYC attitude. But I wanted a map to go along with them so they’d be easier to reference. ",
      },
    ],
    secondColumnText: [
      { mobileBreak: true },
      {
        text: "The app is simple; open a restaurant and you get a",
      },
      {
        link: {
          text: "preview of the review",
          target: "tables-for-two-restaurant",
          noSpaceAfter: true,
        },
      },
      {
        text: ", in addition to the restaurant’s Google reviews and the restaurant’s website. Aside from that you can view a",
      },
      {
        link: {
          text: "chronological list",
          target: "tables-for-two-list",
        },
      },
      {
        text: "of all recent reviews. I built a simple",
      },
      {
        link: {
          text: "admin",
          target: "tables-for-two-admin",
        },
      },
      {
        text: "that fetches from Google, and wrote a",
      },
      {
        link: {
          text: "weekly script",
          target: "tables-for-two-github-action",
        },
      },
      {
        text: "that fetches the latest reviews, so I don’t have to remember to do it myself. Happy eating!",
      },
    ],
  },
  {
    key: "lucia-kempkes",
    title: "Lucia Kempkes",
    role: "Design & Development",
    slides: [
      {
        name: "lucia-kempkes-overview",
        type: "video",
        src: "./images/lucia-kempkes/lucia-kempkes-overview.webp",
        videoSrc:
          "https://js-portfolio-2017.s3.amazonaws.com/lucia-kempkes-overview-video-compressed.mp4",
        alt: "Lucia Kempkes Portfolio",
      },
      {
        name: "lucia-kempkes-homepage",
        type: "image",
        src: "./images/lucia-kempkes/lucia-kempkes-homepage.webp",
        alt: "Lucia Kempkes Homepage",
      },
      {
        name: "lucia-kempkes-series-page",
        type: "image",
        src: "./images/lucia-kempkes/lucia-kempkes-series-page.webp",
        alt: "Lucia Kempkes Series Pages",
      },
      {
        name: "lucia-kempkes-about-page",
        type: "image",
        src: "./images/lucia-kempkes/lucia-kempkes-about-page.webp",
        alt: "Lucia Kempkes About Page",
      },
    ],
    firstColumnText: [
      {
        link: {
          text: "Lucia Kempkes",
          target: "https://luciakempkes.com/",
          externalLink: true,
        },
      },
      {
        text: "is a Berlin-based artist whose work often deals in landscape, but spans a variety of media to explore our relationships to the earth.",
      },
      { break: true },
      {
        text: "She often works in shades of black and white, so we brought in vibrant color to contrast the work. Her work is ",
      },
    ],
    secondColumnText: [
      {
        text: "also tactile and textured, so we used a bold grid to provide elegant structure. The",
      },
      {
        link: {
          text: "homepage",
          target: "lucia-kempkes-homepage",
        },
      },
      { text: "features each of her recent project cycles, while the" },
      {
        link: {
          text: "individual project pages",
          target: "lucia-kempkes-series-page",
        },
      },
      { text: "highlight details of her work and installations. Finally, her" },
      {
        link: {
          text: "about page",
          target: "lucia-kempkes-about-page",
        },
      },
      {
        text: "shows career highlights, and helps to make the work a bit more personal.",
      },
    ],
  },
  {
    key: "point-me",
    title: "point.me",
    role: "Design & Development @ point.me",
    slides: [
      {
        name: "point-me-overview",
        type: "video",
        src: "./images/point-me/point-me-overview.webp",
        videoSrc:
          "https://js-portfolio-2017.s3.amazonaws.com/point-me-overview-video-compressed.mp4",
        alt: "point.me",
      },
      {
        name: "point-me-homepage",
        type: "image",
        src: "./images/point-me/point-me-homepage.webp",
        alt: "point.me Homepage",
      },
      {
        name: "point-me-search-results",
        type: "image",
        src: "./images/point-me/point-me-booking-options.webp",
        alt: "point.me Booking Options",
      },
      {
        name: "point-me-booking-instructions",
        type: "image",
        src: "./images/point-me/point-me-booking-instructions.webp",
        alt: "point.me Booking Instructions",
      },
      {
        name: "point-me-figma",
        type: "image",
        src: "./images/point-me/point-me-figma.webp",
        alt: "point.me Figma Components",
      },
      {
        name: "point-me-storybook",
        type: "image",
        src: "./images/point-me/point-me-storybook.webp",
        alt: "point.me Storybook Components",
      },
    ],
    firstColumnText: [
      {
        text: "I’ve been working with",
      },
      {
        link: {
          text: "point.me",
          target: "https://point.me",
          noSpaceAfter: true,
          externalLink: true,
        },
      },
      {
        text: ", a credit card points travel redemption tool, for the last several years. I work with them in a consultant role, and have been working with them since before they had their own tech or design teams. I was brought on to help bring their rough prototypes into fully-fledged product designs, as well as turn a half-completed Angular app into a state-of-the-art Next.js React app.",
      },
    ],
    secondColumnText: [
      {
        mobileBreak: true,
      },
      {
        text: "We worked around-the-clock to launch their MVP after several quick months, and they’ve gone on to hire full in-house teams that I continue to support. The app lets you",
      },
      {
        link: {
          text: "search for flights",
          target: "point-me-search-results",
        },
      },
      {
        text: "using your own credit card accounts, and then",
      },
      {
        link: {
          text: "teaches you how to redeem them",
          target: "point-me-booking-instructions",
        },
      },
      {
        text: "through opaque means for great value. We’ve built out a robust component library in the",
      },
      {
        link: {
          text: "design files",
          target: "point-me-figma",
        },
      },
      {
        text: "as well as in",
      },
      {
        link: {
          text: "Storybook",
          target: "point-me-storybook",
          noSpaceAfter: true,
        },
      },
      {
        text: ", and continue to improve handoff between teams as well as UX patterns.",
      },
    ],
  },
  {
    key: "chann3l",
    title: "CHANN3L",
    role: "Design & Development @ CHANN3L",
    slides: [
      {
        name: "chann3l-homepage",
        type: "image",
        src: "./images/chann3l/chann3l-homepage.webp",
        alt: "CHANN3L",
      },
      {
        name: "chann3l-readings",
        type: "image",
        src: "./images/chann3l/chann3l-readings.webp",
        alt: "CHANN3L Tarot Readings",
      },
      {
        name: "chann3l-artists",
        type: "image",
        src: "./images/chann3l/chann3l-artists.webp",
        alt: "CHANN3L Artists",
      },
      {
        name: "chann3l-writings",
        type: "image",
        src: "./images/chann3l/chann3l-writings.webp",
        alt: "CHANN3L Writings",
      },
    ],
    firstColumnText: [
      {
        text: "It was a pleasure to build a platform for",
      },
      {
        link: {
          text: "CHANN3L",
          target: "https://chann3l.world/",
          externalLink: true,
          noSpaceAfter: true,
        },
      },
      {
        text: ", Khalila Douze’s multidisciplinary home for her",
      },
      {
        link: {
          text: "tarot reading practice",
          target: "chann3l-readings",
          noSpaceAfter: true,
        },
      },
      {
        text: ",",
      },
      {
        link: {
          text: "musical artist management",
          target: "chann3l-artists",
          noSpaceAfter: true,
        },
      },
      {
        text: ", and",
      },
      {
        link: {
          text: "journalism",
          target: "chann3l-writings",
        },
      },
      {
        text: "for various media outlets.",
      },
    ],
    secondColumnText: [
      {
        mobileBreak: true,
      },
      {
        text: "We wanted to make a watery and wavy experience to match the way she fluidly combines these three pursuits, and I explored the practice of paper marbling to create an environment to match.",
      },
    ],
  },
  {
    key: "noname-book-club",
    title: "Noname Book Club",
    role: "Design & Development @ Noname Book Club",
    slides: [
      {
        name: "noname-book-club",
        type: "video",
        src: "./images/noname-book-club/noname-book-club.webp",
        videoSrc:
          "https://js-portfolio-2017.s3.amazonaws.com/noname-book-club-overview-video-compressed.mp4",
        alt: "Noname Book Club",
      },
      {
        name: "noname-book-club-books",
        type: "image",
        src: "./images/noname-book-club/noname-book-club-books.webp",
        alt: "Noname Book Club Books",
      },
      {
        name: "noname-book-club-bookstores",
        type: "image",
        src: "./images/noname-book-club/noname-book-club-bookstores.webp",
        alt: "Noname Book Club Bookstores",
      },
      {
        name: "noname-book-club-libraries",
        type: "image",
        src: "./images/noname-book-club/noname-book-club-libraries.webp",
        alt: "Noname Book Club Libraries",
      },
      {
        name: "noname-book-club-local-chapters",
        type: "image",
        src: "./images/noname-book-club/noname-book-club-local-chapters.webp",
        alt: "Noname Book Club Local Chapter",
      },
      {
        name: "noname-book-club-inspiration",
        type: "image", // video or image
        src: "./images/noname-book-club/noname-book-club-inspiration.webp",
        alt: "Noname Book Club Inspiration",
      },
    ],
    firstColumnText: [
      {
        link: {
          text: "Noname Book Club",
          target: "https://www.nonamebooks.com/",
          externalLink: true,
        },
      },
      {
        text: "is an online & IRL community dedicated to uplifting voices of people of color. They select two monthly books to read and discuss together. They also send books to incarcerated folks across the country, and put out a quarterly newsletter highlighting marginalized voices in support of abolition, reparations, food sovereignty, and other topics of resistance.",
      },
    ],
    secondColumnText: [
      { mobileBreak: true },
      {
        text: "The website’s goal is to highlight the most important resources they offer: learning about each",
      },
      {
        link: {
          text: "book selection",
          target: "noname-book-club-books",
          noSpaceAfter: true,
        },
      },
      { text: ", finding local black- and POC-owned" },
      {
        link: {
          text: "bookstores",
          target: "noname-book-club-bookstores",
          noSpaceAfter: true,
        },
      },
      { text: ", finding" },
      {
        link: {
          text: "libraries",
          target: "noname-book-club-libraries",
        },
      },
      { text: "that carry the books, and finding" },
      {
        link: {
          text: "local chapters",
          target: "noname-book-club-local-chapters",
        },
      },
      { text: "to join. We chose an aesthetic that" },
      {
        link: {
          text: "references",
          target: "noname-book-club-inspiration",
        },
      },
      {
        text: "radical literature and educational resources, and built it nimbly in order to launch for their one-year anniversary.",
      },
    ],
  },
  {
    key: "locally-grown",
    title: "Locally Grown",
    role: "Design & Development @ Locally Grown",
    slides: [
      {
        name: "locally-grown-channel",
        type: "video",
        src: "./images/locally-grown/locally-grown-channel.webp",
        videoSrc:
          "https://js-portfolio-2017.s3.amazonaws.com/locally-grown-overview-video-compressed.mp4",
        alt: "Locally Grown Channel",
      },
      {
        name: "locally-grown-inspiration",
        type: "image",
        src: "./images/locally-grown/locally-grown-inspiration.webp",
        alt: "Locally Grown Inspiration",
      },
      {
        name: "locally-grown-channel-with-mobile",
        type: "image",
        src: "./images/locally-grown/locally-grown-channel-with-mobile.webp",
        alt: "Locally Grown Channel with Mobile",
      },
      {
        name: "locally-grown-tv-guide-with-mobile",
        type: "image",
        src: "./images/locally-grown/locally-grown-tv-guide-with-mobile.webp",
        alt: "Locally Grown TV Guide with Mobile",
      },
      {
        name: "locally-grown-channels-with-mobile",
        type: "image",
        src: "./images/locally-grown/locally-grown-channels-with-mobile.webp",
        alt: "Locally Grown Channels Index with Mobile",
      },
    ],
    firstColumnText: [
      {
        link: {
          text: "Locally Grown",
          target: "https://www.locallygrown.tv/",
          externalLink: true,
        },
      },
      {
        text: "is a streaming platform that gives under-represented videos and voices throughout history & culture a place to shine (think: public access television). Locally Grown is the long-dreamed vision of Jamil Baldwin and Tyler Bernard, two LA-based artists. They tapped into their rich community of creators and curators, while I built a platform for them to grow into.",
      },
      { break: true },
      { text: "In building the site, we wanted an experience that let the" },
      {
        link: {
          text: "programming shine",
          target: "locally-grown-inspiration",
        },
      },
      { text: "and a big requirement there was" },
    ],
    secondColumnText: [
      {
        text: "to prevent users from controlling which videos they play—no pause, no next, no skip. It’s fundamentally a lean-back experience, which offered enjoyable technical challenges, especially on mobile. And like TV, the site is built of only a few core components: each",
      },
      {
        link: {
          text: "channel",
          target: "locally-grown-channel-with-mobile",
          noSpaceAfter: true,
        },
      },
      { text: ", a" },
      {
        link: {
          text: "TV Guide",
          target: "locally-grown-tv-guide-with-mobile",
          noSpaceAfter: true,
        },
      },
      { text: ", and a" },
      {
        link: {
          text: "list of channels",
          target: "locally-grown-channels-with-mobile",
          noSpaceAfter: true,
        },
      },
      { text: "." },
      { break: true },
      {
        text: "Locally Grown is an ever-morphing experiment, a resource for rare materials, and hopefully something that lasts in a new era of streaming. Enjoy!",
      },
    ],
  },
  {
    key: "aidin",
    title: "Aidin",
    role: "Head of Product @ Aidin",
    slides: [
      {
        name: "aidin-overview-video",
        type: "video",
        src: "./images/aidin/aidin-sending-dashboard-overview.webp",
        videoSrc:
          "https://js-portfolio-2017.s3.amazonaws.com/aidin-overview-video-compressed.mp4",
        alt: "Aidin Dashboard",
      },
      {
        name: "aidin-before-after",
        type: "image",
        src: "./images/aidin/aidin-before-after.webp",
        alt: "Aidin Before & After",
      },
      {
        name: "aidin-sending-referral",
        type: "image",
        src: "./images/aidin/aidin-sending-referral.webp",
        alt: "Sending Aidin Referrals",
      },
      {
        name: "aidin-receiving-referral",
        type: "image",
        src: "./images/aidin/aidin-receiving-referral.webp",
        alt: "Receiving Aidin Referrals",
      },
      {
        name: "aidin-referrals-dashboard",
        type: "image",
        src: "./images/aidin/aidin-referrals-dashboard.webp",
        alt: "Aidin Referrals Dashboard",
      },
      {
        name: "aidin-providers-dashboard",
        type: "image",
        src: "./images/aidin/aidin-providers-dashboard.webp",
        alt: "Aidin Providers Dashboard",
      },
      {
        name: "aidin-user-testing",
        type: "image",
        src: "./images/aidin/aidin-user-testing.webp",
        alt: "Aidin User Testing Documentation",
      },
      {
        name: "aidin-project-management",
        type: "image",
        src: "./images/aidin/aidin-project-management.webp",
        alt: "Aidin Product Management",
      },
    ],
    firstColumnText: [
      { text: "For over two years I worked with" },
      {
        link: {
          text: "Aidin",
          target: "https://www.myaidin.com/",
          noSpaceAfter: true,
          externalLink: true,
        },
      },
      {
        text: ", an NYC-based healthcare company, to redesign and bring product thinking to their app. Aidin helps ease patient care transitions (say, moving from a hospital to a nursing home) by bringing quality data to the moment when patients choose where they want to receive their care.",
      },
      { break: true },
      { text: "Together we rebuilt Aidin from" },
      {
        link: {
          text: "the ground up",
          target: "aidin-before-after",
          noSpaceAfter: true,
        },
      },
      { text: ", rethinking how referrals are" },
      {
        link: {
          text: "sent",
          target: "aidin-sending-referral",
          noSpaceAfter: true,
        },
      },
      { text: ", " },
      {
        link: {
          text: "received",
          target: "aidin-receiving-referral",
          noSpaceAfter: true,
        },
      },
      { text: ", and" },
      {
        link: {
          text: "managed",
          target: "aidin-referrals-dashboard",
          noSpaceAfter: true,
        },
      },
      { text: ", as well as exploring their future-forward" },
      {
        link: {
          text: "business goals",
          target: "aidin-providers-dashboard",
          noSpaceAfter: true,
        },
      },
      { text: "." },
    ],
    secondColumnText: [
      { mobileBreak: true },
      {
        text: "Aidin’s users are hospital case managers and provider intake coordinators that use Aidin all-day, every day, so it was important to do extensive",
      },
      {
        link: {
          text: "user testing",
          target: "aidin-user-testing",
          noSpaceAfter: true,
        },
      },
      {
        text: ", interviewing, demoing, and beta testing of our proposed solutions.",
      },
      { break: true },
      {
        text: "After setting the vision, we moved into rebuilding the app. I managed our",
      },
      {
        link: {
          text: "roadmap",
          target: "aidin-project-management",
          noSpaceAfter: true,
        },
      },
      {
        text: ", as well as our engineering team, providing project management, code review, and QA testing, while managing the full Aidin team’s evolving requirements and needs with agile development.",
      },
    ],
  },
  {
    key: "genius",
    title: "Genius",
    role: "Head of Design @ Genius",
    slides: [
      {
        name: "genius-video",
        type: "video",
        src: "./images/genius/genius-homepage-after-matches-video.webp",
        videoSrc:
          "https://s3.amazonaws.com/js-portfolio-2017/genius-overview-video-compressed.mp4",
        alt: "Genius Homepage Redesign",
      },
      {
        name: "genius-web-annotator",
        type: "image",
        src: "./images/genius/genius-web-annotator-with-browser.gif",
        alt: "Genius Web Annotator",
      },
      {
        name: "genius-song-after",
        type: "image",
        src: "./images/genius/genius-song-after.webp",
        alt: "Genius Song Page Redesign",
      },
      {
        name: "genius-song-mobile",
        type: "image",
        src: "./images/genius/genius-song-mobile.webp",
        alt: "Genius Mobile Site Before & After",
      },
      {
        name: "genius-artist-after",
        type: "image",
        src: "./images/genius/genius-artist-after.webp",
        alt: "Genius Artist Page Redesign",
      },
      {
        name: "genius-homepage-after",
        type: "image",
        src: "./images/genius/genius-homepage-after-matches-video.webp",
        alt: "Genius Homepage Redesign",
      },
      {
        name: "genius-article-after",
        type: "image",
        src: "./images/genius/genius-article-after.webp",
        alt: "Genius Articles",
      },
      {
        name: "genius-marketing",
        type: "image",
        src: "./images/genius/genius-marketing.webp",
        alt: "Genius Marketing Materials",
      },
    ],
  },
  {
    key: "table-manners",
    title: "Table Manners",
    role: "Freelancer @ Me",
    slides: [
      {
        name: "table-manners-homepage",
        type: "image",
        src: "./images/table-manners/table-manners-homepage.webp",
        alt: "Table Manners Homepage",
      },
      {
        name: "table-manners-quiz",
        type: "image",
        src: "./images/table-manners/table-manners-quiz.webp",
        alt: "Table Manners Quiz",
      },
    ],
    firstColumnText: [
      {
        text: "Before Genius I freelanced, working on my own projects and with various companies in the U.S. and Europe. One of my favorites was a personal site,",
      },
      {
        link: {
          text: "Table Manners",
          target: "https://www.tablemanners.us/",
          noSpaceAfter: true,
          externalLink: true,
        },
      },
      { text: ", " },
    ],
    secondColumnText: [
      {
        text: "which brought a 30-year-old text on etiquette and dining to the internet, complete with",
      },
      {
        link: {
          text: "self-quiz",
          target: "table-manners-quiz",
          noSpaceAfter: true,
        },
      },
      { text: "." },
    ],
  },
  {
    key: "refinery29",
    title: "Refinery29",
    role: "Developer @ Refinery29",
    slides: [
      {
        name: "refinery29-video",
        type: "video",
        src: "./images/refinery29/refinery29-homepage-matches-video.webp",
        videoSrc:
          "https://s3.amazonaws.com/js-portfolio-2017/refinery29-overview-video-compressed.mp4",
        alt: "Refinery29 Homepage",
      },
      {
        name: "refinery29-street-style",
        type: "image",
        src: "./images/refinery29/refinery29-street_style.webp",
        alt: "Refinery29 Street Style Landing Page",
      },
      {
        name: "refinery29-weddings",
        type: "image",
        src: "./images/refinery29/refinery29-weddings.webp",
        alt: "Refinery29 Weddings Landing Page",
      },
      {
        name: "refinery29-festival-tracker",
        type: "image",
        src: "./images/refinery29/refinery29-festival_tracker.webp",
        alt: "Refinery29 Festival Tracker Minisite",
      },
    ],
  },
];
