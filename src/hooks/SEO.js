import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData);
  const {
    siteTitle,
    siteDescription,
    author,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata;
  console.log(`${siteUrl}${image}`);
  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
      <meta name="author" content={author} />

      {/* facebook cards */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />

      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
};

export default SEO;
