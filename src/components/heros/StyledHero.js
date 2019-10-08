import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
const StyledHero = ({ img, className, children, home }) => (
  <BackgroundImage className={className} fluid={img} home={home}>
    {children}
  </BackgroundImage>
);

export default styled(StyledHero)`
  min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '50vh')};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
