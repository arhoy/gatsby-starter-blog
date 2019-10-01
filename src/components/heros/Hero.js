import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  height: 60vh;
  background-position: bottom center;
  positiion: relative;
`;

const TextBox = styled.div`
  text-transform: uppercase;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.colors.white};
  font-family: Mansalva;
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.jpeg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>Gatsby Image</TextBox>
    </ImageBackground>
  );
};

export default Hero;
