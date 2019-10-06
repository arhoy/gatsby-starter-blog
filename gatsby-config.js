require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const URL = 'https://aquasar-starter-blog.netlify.com';

module.exports = {
  siteMetadata: {
    title: 'Alex Quasar Blog',
    description:
      'A lovely Blog testing Gatsby with Emotion (css in jx flavor) and MDX',
    author: 'Alex Quasar',
    twitterUsername: '@_aquasar',
    image: '/default.jpg',
    siteUrl: URL,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
          },
          {
            family: `Roboto`,
          },
          {
            family: `Mansalva`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layouts/Layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `gatsbyjs`,
      },
    },
  ],
};
