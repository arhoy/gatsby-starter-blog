import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layouts/Layout';
import ReadLink from '../components/Links/ReadLink';
import styled from '@emotion/styled';

const Post = styled.div`
    max-width: 60rem;
    margin: 2rem auto;
    &__p {
      margin: 2rem 0rem;
    }
  }
  
`;

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const post = ({ data: { mdx: post } }) => {
  const { body } = post;
  return (
    <Layout>
      <Post>
        <MDXRenderer>{body}</MDXRenderer>
        <ReadLink to="/">Back to All Posts</ReadLink>
      </Post>
    </Layout>
  );
};

export default post;
