import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from '@emotion/styled';
import SEO from '../hooks/SEO';

// run template query
export const query = graphql`
  query getArticle($slug: String!) {
    article: contentfulBlogPost(slug: { eq: $slug }) {
      title
      description {
        description
      }
      author {
        name
      }
      publishDate(formatString: "MMM Do, Y")
      bodyRichText {
        json
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      tags
    }
  }
`;

const Article = styled.article`
  max-width: 65rem;
  margin: 0 auto;
`;

const BlogTemplate = ({ data: { article } }) => {
  const {
    title,
    bodyRichText: { json },
    publishDate,
  } = article;

  const options = {
    renderNode: {},
  };

  return (
    <Layout>
      <SEO title={title} />
      <Article>
        <main>{documentToReactComponents(json)}</main>
      </Article>
    </Layout>
  );
};

export default BlogTemplate;
