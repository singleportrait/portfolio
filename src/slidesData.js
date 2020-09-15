export const SLIDES = [
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
        followWithComma: true,
      } },
      { text: ", a" },
      { link: {
        text: "TV Guide",
        target: "locally-grown-tv-guide-with-mobile",
        followWithComma: true,
      } },
      { text: ", and a" },
      { link: {
        text: "list of channels",
        target: "locally-grown-channels-with-mobile",
        followWithComma: true,
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
      { name: 'aidin-overview-video', type: 'video', src: './images/aidin-sending-dashboard-zoomed.png', videoSrc: 'https://js-portfolio-2017.s3.amazonaws.com/aidin-overview-video-compressed.mp4', alt: 'Aidin Dashboard' },
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
        followWithComma: true,
        externalLink: true,
      } },
      { text: ", an NYC-based healthcare company, to redesign and bring product thinking to their app. Aidin helps ease patient care transitions (say, moving from a hospital to a nursing home) by bringing quality data to the moment when patients choose where they want to receive their care." },
      { break: true },
      { text: "Together we rebuilt Aidin from" },
      { link: {
        text: "the ground up",
        target: "aidin-before-after",
        followWithComma: true,
      } },
      { text: ", rethinking how referrals are" },
      { link: {
        text: "sent",
        target: "aidin-sending-referral",
        followWithComma: true,
      } },
      { text: ", " },
      { link: {
        text: "received",
        target: "aidin-receiving-referral",
        followWithComma: true,
      } },
      { text: ", and" },
      { link: {
        text: "managed",
        target: "aidin-referrals-dashboard",
        followWithComma: true,
      } },
      { text: ", as well as exploring their future-forward" },
      { link: {
        text: "business goals",
        target: "aidin-providers-dashboard",
        followWithComma: true,
      } },
      { text: "." },
    ],
    secondColumnText: [
      { mobileBreak: true },
      { text: "Aidin’s users are hospital case managers and provider intake coordinators that use Aidin all-day, every day, so it was important to do extensive" },
      { link: {
        text: "user testing",
        target: "aidin-user-testing",
        followWithComma: true,
      } },
      { text: ", interviewing, demoing, and beta testing of our proposed solutions." },
      { break: true },
      { text: "After setting the vision, we moved into rebuilding the app. I managed our" },
      { link: {
        text: "roadmap",
        target: "aidin-project-management",
        followWithComma: true,
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
    key: 'freelance',
    title: 'Freelance',
    role: 'Freelancer @ Me',
    slides: [
      { name: 'freelance-table-manners', type:  'image', src: './images/freelance-table_manners.png', alt: 'Table Manners' },
      { name: 'freelance-mapsense', type: 'image', src: './images/freelance-mapsense.png', alt: 'Mapsense' },
      { name: 'freelance-quinciple', type: 'image', src: './images/freelance-quinciple.png', alt: 'Quinciple' },
      { name: 'freelance-clementine', type: 'image', src: './images/freelance-clementine.png', alt: 'Clementine' },
      { name: 'freelance-hapide', type: 'image', src: './images/freelance-hapide.png', alt: 'Hapide' } // TODO: Remove here & in the text
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
