module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://mr47.me/`,
    // Your Name
    name: 'Deepak Thamatam aka "Mr.47"',
    // Main Site Title
    title: `Deepak Thamatam | IT Support Engineer`,
    // Description that goes under your name in main bio
    description: `Computer Savvy, Power user, Superuser, Ethical Hacker, Bug Bounty Hunter, Tech Enthusiast, Gamer.`,
    // Optional: Twitter account handle
    author: `@Deepak_Mr47`,
    // Optional: Github account URL
    github: `https://github.com/mr-forty-seven`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/thamatamdeepak/`,
    // Content of the About Me section
    about: `Hello! I'm Deepak, I work as an IT Support Engineer at MCG Computer in South Melbourne. This site is an extension of my resume and LinkedIn profile for myself to share more information about my interests and hobby projects I'm working on.

I'm currently working on self hosted home sever project with various opensource applications that i use everyday and not rely on big companies with my data.

My aim is to take control of my privacy, security and data by using as many open sources software as i can and selfhosting them by myself at home or on a remote private server. I plan on doing this on the go over the next 1-2 years while learning various things like setting up homelab, Pihole, Pfsense, VPN to access from outside, Nextcloud file sync & share, FreeNAS on single server with virtualization and using containers.

I will be linking all the projects below to blog post with detailed setup later on.

Current projects :

- This website.
- Setting up CalDev, CardDev for my Calender and Contacts.
- Selfhost encrypted notes taking app for building my KB.
- Encrypted data backup solution.
- Private email setup.
- Daily driving Ubuntu.
- test`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Devfolio',
        description:
          'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
