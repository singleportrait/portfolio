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
        src: './images/slide-name.png',
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
        src: "./images/tables-for-two-overview.png",
        videoSrc:
          "https://js-portfolio-2017.s3.amazonaws.com/tables-for-two-overview-video-compressed.mp4",
        alt: "Tables for Two Restaurant Review App",
      },
      {
        name: "tables-for-two-homepage",
        type: "image",
        src: "./images/tables-for-two-homepage.png",
        alt: "Tables for Two Homepage",
      },
      {
        name: "tables-for-two-restaurant",
        type: "image",
        src: "./images/tables-for-two-restaurant.png",
        alt: "Tables for Two Restaurant",
      },
      {
        name: "tables-for-two-list",
        type: "image",
        src: "./images/tables-for-two-list.png",
        alt: "Tables for Two List View",
      },
      {
        name: "tables-for-two-admin",
        type: "image",
        src: "./images/tables-for-two-admin.png",
        alt: "Tables for Two Admin",
      },
      {
        name: "tables-for-two-github-action",
        type: "image",
        src: "./images/tables-for-two-github-action.png",
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
    key: 'lucia-kempkes',
    title: 'Lucia Kempkes',
    role: 'Design & Development',
    slides: [
      {
        name: 'lucia-kempkes-overview',
        type: 'video',
        src: './images/lucia-kempkes-overview.png',
        videoSrc: 'https://js-portfolio-2017.s3.amazonaws.com/lucia-kempkes-overview-video-compressed.mp4',
        alt: 'Lucia Kempkes Portfolio'
      },
      {
        name: 'lucia-kempkes-homepage',
        type: 'image',
        src: './images/lucia-kempkes-homepage.png',
        alt: 'Lucia Kempkes Homepage'
      },
      {
        name: 'lucia-kempkes-series-page',
        type: 'image',
        src: './images/lucia-kempkes-series-page.png',
        alt: 'Lucia Kempkes Series Pages'
      },
      {
        name: 'lucia-kempkes-about-page',
        type: 'image',
        src: './images/lucia-kempkes-about-page.png',
        alt: 'Lucia Kempkes About Page'
      },
    ],
    firstColumnText: [
      { link: {
        text: "Lucia Kempkes",
        target: "https://luciakempkes.com/",
        externalLink: true,
      } },
      { text: "is a Berlin-based artist whose work often deals in landscape, but spans a variety of media to explore our relationships to the earth." },
      { break: true },
      { text: "She often works in shades of black and white, so we brought in vibrant color to contrast the work. Her work is " },
    ],
    secondColumnText: [
      { text: "also tactile and textured, so we used a bold grid to provide elegant structure. The" },
      { link: {
        text: "homepage",
        target: "lucia-kempkes-homepage",
      } },
      { text: "features each of her recent project cycles, while the" },
      { link: {
        text: "individual project pages",
        target: "lucia-kempkes-series-page",
      } },
      { text: "highlight details of her work and installations. Finally, her" },
      { link: {
        text: "about page",
        target: "lucia-kempkes-about-page",
      } },
      { text: "shows career highlights, and helps to make the work a bit more personal." },
    ],
  },
  {
    key: 'noname-book-club',
    title: 'Noname Book Club',
    role: 'Design & Development @ Noname Book Club',
    slides: [
      {
        name: 'noname-book-club',
        type: 'video',
        src: './images/noname-book-club.png',
        videoSrc: 'https://js-portfolio-2017.s3.amazonaws.com/noname-book-club-overview-video-compressed.mp4',
        alt: 'Noname Book Club'
      },
      {
        name: 'noname-book-club-books',
        type: 'image',
        src: './images/noname-book-club-books.png',
        alt: 'Noname Book Club Books'
      },
      {
        name: 'noname-book-club-bookstores',
        type: 'image',
        src: './images/noname-book-club-bookstores.png',
        alt: 'Noname Book Club Bookstores'
      },
      {
        name: 'noname-book-club-libraries',
        type: 'image',
        src: './images/noname-book-club-libraries.png',
        alt: 'Noname Book Club Libraries'
      },
      {
        name: 'noname-book-club-local-chapters',
        type: 'image',
        src: './images/noname-book-club-local-chapters.png',
        alt: 'Noname Book Club Local Chapter'
      },
      {
        name: 'noname-book-club-inspiration',
        type: 'image', // video or image
        src: './images/noname-book-club-inspiration.png',
        alt: 'Noname Book Club Inspiration'
      },
    ],
    firstColumnText: [
      { link: {
        text: "Noname Book Club",
        target: "https://www.nonamebooks.com/",
        externalLink: true
      } },
      { text: "is an online & IRL community dedicated to uplifting voices of people of color. They select two monthly books to read and discuss together. They also send books to incarcerated folks across the country, and put out a quarterly newsletter highlighting marginalized voices in support of abolition, reparations, food sovereignty, and other topics of resistance." }
    ],
    secondColumnText: [
      { mobileBreak: true },
      { text: "The website’s goal is to highlight the most important resources they offer: learning about each" },
      { link: {
        text: "book selection",
        target: "noname-book-club-books",
        noSpaceAfter: true
      } },
      { text: ", finding local black- and POC-owned" },
      { link: {
        text: "bookstores",
        target: "noname-book-club-bookstores",
        noSpaceAfter: true
      } },
      { text: ", finding" },
      { link: {
        text: "libraries",
        target: "noname-book-club-libraries",
      } },
      { text: "that carry the books, and finding" },
      { link: {
        text: "local chapters",
        target: "noname-book-club-local-chapters",
      } },
      { text: "to join. We chose an aesthetic that" },
      { link: {
        text: "references",
        target: "noname-book-club-inspiration",
      } },
      { text: "radical literature and educational resources, and built it nimbly in order to launch for their one-year anniversary." },
    ]
  },
  {
    key: 'locally-grown',
    title: 'Locally Grown',
    role: 'Design & Development @ Locally Grown',
    slides: [
      { name: 'locally-grown-channel', type: 'video', src: './images/locally-grown-channel.png', videoSrc: 'https://js-portfolio-2017.s3.amazonaws.com/locally-grown-overview-video-compressed.mp4', alt: 'Locally Grown Channel' },
      { name: 'locally-grown-inspiration', type: 'image', src: './images/locally-grown-inspiration.png', alt: 'Locally Grown Inspiration' },
      { name: 'locally-grown-channel-with-mobile', type: 'image', src: './images/locally-grown-channel-with-mobile.png', alt: 'Locally Grown Channel with Mobile' },
      { name: 'locally-grown-tv-guide-with-mobile', type: 'image', src: './images/locally-grown-tv-guide-with-mobile.png', alt: 'Locally Grown TV Guide with Mobile' },
      { name: 'locally-grown-channels-with-mobile', type: 'image', src: './images/locally-grown-channels-with-mobile.png', alt: 'Locally Grown Channels Index with Mobile' },
      // { name: 'locally-grown-', type: 'image', src: './images/locally-grown-.png', alt: 'Locally Grown' },
    ],
    firstColumnText: [
      { link: {
        text: "Locally Grown",
        target: "https://www.locallygrown.tv/",
        externalLink: true
      } },
      { text: "is a streaming platform that gives under-represented videos and voices throughout history & culture a place to shine (think: public access television). Locally Grown is the long-dreamed vision of Jamil Baldwin and Tyler Bernard, two LA-based artists. They tapped into their rich community of creators and curators, while I built a platform for them to grow into." },
      { break: true },
      { text: "In building the site, we wanted an experience that let the" },
      { link: {
        text: "programming shine",
        target: "locally-grown-inspiration",
      } },
      { text: "and a big requirement there was" },
    ],
    secondColumnText: [
      { text: "to prevent users from controlling which videos they play—no pause, no next, no skip. It’s fundamentally a lean-back experience, which offered enjoyable technical challenges, especially on mobile. And like TV, the site is built of only a few core components: each" },
      { link: {
        text: "channel",
        target: "locally-grown-channel-with-mobile",
        noSpaceAfter: true,
      } },
      { text: ", a" },
      { link: {
        text: "TV Guide",
        target: "locally-grown-tv-guide-with-mobile",
        noSpaceAfter: true,
      } },
      { text: ", and a" },
      { link: {
        text: "list of channels",
        target: "locally-grown-channels-with-mobile",
        noSpaceAfter: true,
      } },
      { text: "." },
      { break: true },
      { text: "Locally Grown is an ever-morphing experiment, a resource for rare materials, and hopefully something that lasts in a new era of streaming. Enjoy!" },
    ]
  },
  {
    key: 'aidin',
    title: 'Aidin',
    role: 'Head of Product @ Aidin',
    slides: [
      { name: 'aidin-overview-video', type: 'video', src: './images/aidin-sending-dashboard-overview.png', videoSrc: 'https://js-portfolio-2017.s3.amazonaws.com/aidin-overview-video-compressed.mp4', alt: 'Aidin Dashboard' },
      { name: 'aidin-before-after', type: 'image', src: './images/aidin-before-after.png', alt: 'Aidin Before & After' },
      { name: 'aidin-sending-referral', type: 'image', src: './images/aidin-sending-referral.png', alt: 'Sending Aidin Referrals' },
      { name: 'aidin-receiving-referral', type: 'image', src: './images/aidin-receiving-referral.png', alt: 'Receiving Aidin Referrals' },
      { name: 'aidin-referrals-dashboard', type: 'image', src: './images/aidin-referrals-dashboard.png', alt: 'Aidin Referrals Dashboard' },
      { name: 'aidin-providers-dashboard', type: 'image', src: './images/aidin-providers-dashboard.png', alt: 'Aidin Providers Dashboard' },
      { name: 'aidin-user-testing', type: 'image', src: './images/aidin-user-testing.png', alt: 'Aidin User Testing Documentation' },
      { name: 'aidin-project-management', type: 'image', src: './images/aidin-project-management.png', alt: 'Aidin Product Management' },
      // { name: 'aidin-', type: 'image', src: './images/aidin-.png' },
    ],
    firstColumnText: [
      { text: "For over two years I worked with" },
      { link: {
        text: "Aidin",
        target: "https://www.myaidin.com/",
        noSpaceAfter: true,
        externalLink: true,
      } },
      { text: ", an NYC-based healthcare company, to redesign and bring product thinking to their app. Aidin helps ease patient care transitions (say, moving from a hospital to a nursing home) by bringing quality data to the moment when patients choose where they want to receive their care." },
      { break: true },
      { text: "Together we rebuilt Aidin from" },
      { link: {
        text: "the ground up",
        target: "aidin-before-after",
        noSpaceAfter: true,
      } },
      { text: ", rethinking how referrals are" },
      { link: {
        text: "sent",
        target: "aidin-sending-referral",
        noSpaceAfter: true,
      } },
      { text: ", " },
      { link: {
        text: "received",
        target: "aidin-receiving-referral",
        noSpaceAfter: true,
      } },
      { text: ", and" },
      { link: {
        text: "managed",
        target: "aidin-referrals-dashboard",
        noSpaceAfter: true,
      } },
      { text: ", as well as exploring their future-forward" },
      { link: {
        text: "business goals",
        target: "aidin-providers-dashboard",
        noSpaceAfter: true,
      } },
      { text: "." },
    ],
    secondColumnText: [
      { mobileBreak: true },
      { text: "Aidin’s users are hospital case managers and provider intake coordinators that use Aidin all-day, every day, so it was important to do extensive" },
      { link: {
        text: "user testing",
        target: "aidin-user-testing",
        noSpaceAfter: true,
      } },
      { text: ", interviewing, demoing, and beta testing of our proposed solutions." },
      { break: true },
      { text: "After setting the vision, we moved into rebuilding the app. I managed our" },
      { link: {
        text: "roadmap",
        target: "aidin-project-management",
        noSpaceAfter: true,
      } },
      { text: ", as well as our engineering team, providing project management, code review, and QA testing, while managing the full Aidin team’s evolving requirements and needs with agile development." },
    ]
  },
  {
    key: 'genius',
    title: 'Genius',
    role: 'Head of Design @ Genius',
    slides: [
      { name: 'genius-video', type: 'video', src: './images/genius-homepage-after-matches-video.png', videoSrc: 'https://s3.amazonaws.com/js-portfolio-2017/genius-overview-video-compressed.mp4', alt: 'Genius Homepage Redesign' },
      { name: 'genius-web-annotator', type: 'image', src: './images/genius-web-annotator-with-browser.gif', alt: 'Genius Web Annotator' },
      { name: 'genius-song-after', type: 'image', src: './images/genius-song-after.png', alt: 'Genius Song Page Redesign' },
      { name: 'genius-song-mobile', type: 'image', src: './images/genius-song-mobile.png', alt: 'Genius Mobile Site Before & After' },
      { name: 'genius-artist-after', type: 'image', src: './images/genius-artist-after.png', alt: 'Genius Artist Page Redesign' },
      { name: 'genius-homepage-after', type: 'image', src: './images/genius-homepage-after-matches-video.png', alt: 'Genius Homepage Redesign' },
      { name: 'genius-article-after', type: 'image', src: './images/genius-article-after.png', alt: 'Genius Articles' },
      { name: 'genius-marketing', type: 'image', src: './images/genius-marketing.png', alt: 'Genius Marketing Materials' }
    ],
  },
  {
    key: 'table-manners',
    title: 'Table Manners',
    role: 'Freelancer @ Me',
    slides: [
      {
        name: 'table-manners-homepage',
        type: 'image',
        src: './images/table-manners-homepage.png',
        alt: 'Table Manners Homepage'
      },
      {
        name: 'table-manners-quiz',
        type: 'image',
        src: './images/table-manners-quiz.png',
        alt: 'Table Manners Quiz'
      },
    ],
    firstColumnText: [
      { text: "Before Genius I freelanced, working on my own projects and with various companies in the U.S. and Europe. One of my favorites was a personal site," },
      { link:
        {
          text: "Table Manners",
          target: "https://www.tablemanners.us/",
          noSpaceAfter: true,
          externalLink: true,
        }
      },
      { text: ", " },
    ],
    secondColumnText: [
      { text: "which brought a 30-year-old text on etiquette and dining to the internet, complete with" },
      { link:
        {
          text: "self-quiz",
          target: "table-manners-quiz",
          noSpaceAfter: true,
        }
      },
      { text: "." },
    ],
  },
  {
    key: 'refinery29',
    title: 'Refinery29',
    role: 'Developer @ Refinery29',
    slides: [
      { name: 'refinery29-video', type: 'video', src: './images/refinery29-homepage-matches-video.png', videoSrc: 'https://s3.amazonaws.com/js-portfolio-2017/refinery29-overview-video-compressed.mp4', alt: 'Refinery29 Homepage' },
      { name: 'refinery29-street-style', type:  'image', src: './images/refinery29-street_style.png', alt: 'Refinery29 Street Style Landing Page' },
      { name: 'refinery29-weddings', type:  'image', src: './images/refinery29-weddings.png', alt: 'Refinery29 Weddings Landing Page' },
      { name: 'refinery29-festival-tracker', type:  'image', src: './images/refinery29-festival_tracker.png', alt: 'Refinery29 Festival Tracker Minisite' }
    ],
  }
];
