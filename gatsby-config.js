require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const URL = 'https://www.pexels.com';

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
            family: `Mansalva`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
        resolve: `gatsby-plugin-mdx`,
        options: {
          defaultLayouts: {
            default: require.resolve("./src/components/Layout/layout.js"),
          },
        },
      },
  ],
};
