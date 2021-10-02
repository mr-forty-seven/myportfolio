module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://mr47.me/`,
    // Your Name
    name: 'Deepak "Mr.47" Thamatam ',
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
    about: 'test'  , 'test2' ,

    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'In Progress',
          description:
            'Coming soon',
        link: '',
      },
      {
        name: 'Planned',
        description:
          'Coming soon',
        link: '',
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
