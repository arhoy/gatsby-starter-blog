// Each Article in the Article List component
import React from 'react';
import styled from '@emotion/styled';
import NoStyleLink from '../Links/NoStyleLink';
import Image from 'gatsby-image';

const Div = styled.div`
  margin: 2rem 0rem;
  max-width: 100rem;
  margin: 1rem auto;
  & h2 {
    font-size: 1.6rem;
    font-weight: 400;
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

const StyledLink = styled(NoStyleLink)`
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 1rem 1rem;
`;

const ImageContainer = styled(Image)`
  min-width: 6rem;
  min-height: 6rem;
  margin-right: 1rem;
  border-radius: 50%;
  background-size: cover;
`;

const Title = styled.h2`
  display: flex;
  justify-self: flex-start;
`;

const Article = ({ article }) => {
  return (
    <Div>
      <StyledLink to={`articles/${article.slug}`}>
        <ImageContainer fluid={article.heroImage.fluid} alt={article.title} />
        <Title>{article.title}</Title>
      </StyledLink>
    </Div>
  );
};

export default Article;
