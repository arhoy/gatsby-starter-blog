import React from 'react';
import styled from '@emotion/styled';
import NoStyleLink from '../Links/NoStyleLink';
import Image from 'gatsby-image';

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

const ImageContainer = styled(Image)`
  width: 10rem;
`;

const Article = ({ article }) => {
  console.log('Article is ', article);
  return (
    <Div>
      <NoStyleLink to={`articles/${article.slug}`}>
        <h2>{article.title}</h2>
        <p className="author">By {article.author.name}</p>
        <ImageContainer fluid={article.heroImage.fluid} alt={article.title} />
      </NoStyleLink>
    </Div>
  );
};

export default Article;
