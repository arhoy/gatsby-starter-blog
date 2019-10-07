import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
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

const AritlceHeader = styled.div`
  margin-bottom: 6rem;
`;

const ArticleContainer = styled.article`
  max-width: 75rem;
  margin: 0 auto;
  & li {
    margin-left: 2rem;
  }
  ul {
    list-style: disk;
  }
`;

const P = styled.p`
  padding: 1rem 0rem;
`;

const TagContainer = styled.div`
  margin: 1rem 0;
`;

const Tag = styled.span`
  padding: 0.5rem 1.5rem;
  background: ${props => props.theme.colors.primaryLight};
  margin-right: 1rem;
`;

const BoldStyle = styled.span`
  font-weight: bold;
`;

const CodeStyle = styled.span`
  color: red;
`;

const Bold = ({ children }) => <BoldStyle>{children}</BoldStyle>;
const Text = ({ children }) => <P>{children}</P>;

const Code = ({ children }) => <CodeStyle>{children}</CodeStyle>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.CODE]: text => (
      <Code>
        {/* {' '}
        <FullArticleCode language={language} code={text} />{' '} */}
        I am some code here
      </Code>
    ),
  },

  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};

const BlogTemplate = ({ data: { article } }) => {
  console.log('JSON IS', article.bodyRichText.json);
  const {
    title,
    bodyRichText: { json },
    publishDate,
    author,
    tags,
  } = article;

  return (
    <Layout>
      <SEO title={title} />

      <ArticleContainer>
        <AritlceHeader>
          <h1>{title}</h1>
          <p>{publishDate}</p>
          <p>{author.name}</p>
          <TagContainer>
            {tags.map(tag => (
              <Tag>{tag}</Tag>
            ))}
          </TagContainer>
        </AritlceHeader>
        <main>{documentToReactComponents(json, options)}</main>
      </ArticleContainer>
    </Layout>
  );
};

export default BlogTemplate;
