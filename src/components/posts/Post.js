import React from 'react';
import styled from '@emotion/styled';
import NoStyleLink from '../Links/NoStyleLink';

const Div = styled.div`
  border-left: 4px solid ${props => props.theme.colors.black};
  margin: 2rem 0rem;
  padding: 3rem 2rem;
  max-width: 100rem;
  & h2 {
    font-size: 2rem;
  }
  & p {
    padding: 1rem;
  }
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.lightgrey};
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
  }
  & .author {
    font-size: 1.5rem;
  }
`;

const Post = ({ post }) => {
  return (
    <Div>
      <NoStyleLink to={post.slug}>
        <h2>{post.title}</h2>
        <p className="content">{post.excerpt}</p>
        <p className="author">By {post.author}</p>
      </NoStyleLink>
    </Div>
  );
};

export default Post;
