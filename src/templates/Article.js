import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import styled from '@emotion/styled';
import SEO from '../hooks/SEO';
import ArticleCode from '../components/articles/ArticleCode';
import Image from 'gatsby-image';

// run template query
export const query = graphql`
  query getFullArticle($slug: String!) {
    article: contentfulAlexQuasarArticles(slug: { eq: $slug }) {
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
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
`;

const ArticleHeaderImage = styled(Image)`
  width: 12rem;
  height: 12rem;
  background-size: contain;
  margin-right: 1rem;
  justify-self: center;
  align-self: center;
  @media (max-width: 750px) {
    display: none;
  }
`;

const ArticleHeaderContent = styled.div`
  padding: 1rem;
  & p {
    font-size: 1.3rem;
  }
`;

const ArticleContainer = styled.article`
  max-width: 75rem;
  margin: 0 auto;
  & li {
    margin-left: 4rem;
  }

  ul {
    list-style: disk;
  }

  h4 {
    font-family: Mansalva;
  }
`;

const P = styled.p`
  padding: 1rem 0rem;
`;

const TagContainer = styled.div`
  margin: 1rem 0;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  font-size: 1.3rem;
  background: ${props => props.theme.colors.primaryLight};
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  border-radius: 4px;
`;

const BoldStyle = styled.span`
  font-weight: bold;
`;

const CodeStyle = styled.span``;

const Title = styled.h1`
  font-family: Poppins;
  font-size: 2.4rem;
  line-height: 2.4rem;
  margin-bottom: 1.4rem;
`;

const Bold = ({ children }) => <BoldStyle>{children}</BoldStyle>;
const Text = ({ children }) => <P>{children}</P>;

const Code = ({ children }) => <CodeStyle>{children}</CodeStyle>;

const AricleTemplate = ({ data: { article } }) => {
  const {
    title,
    bodyRichText: { json },
    publishDate,
    author,
    heroImage: { fluid },
    tags,
  } = article;

  // determine which prism to render based on tags
  let language = 'sql';

  if (tags.includes('javascript')) {
    language = 'javascript';
  }
  if (tags.includes('python')) {
    language = 'python';
  }

  console.log(fluid);
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.CODE]: text => (
        <Code>
          <ArticleCode language={language} code={text} />
        </Code>
      ),
    },

    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };

  return (
    <Layout>
      <SEO title={title} />

      <ArticleContainer>
        <AritlceHeader>
          <ArticleHeaderImage fluid={fluid} />

          <ArticleHeaderContent>
            <Title>{title}</Title>
            <p>{publishDate}</p>
            <p>{author.name}</p>

            <TagContainer>
              {tags.map(tag => (
                <Tag>{tag}</Tag>
              ))}
            </TagContainer>
          </ArticleHeaderContent>
        </AritlceHeader>
        <main>{documentToReactComponents(json, options)}</main>
      </ArticleContainer>
    </Layout>
  );
};

export default AricleTemplate;
