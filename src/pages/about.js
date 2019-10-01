import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Hero from '../components/heros/Hero';
import styled from '@emotion/styled';

const AboutStyled = styled.div`
  p {
    margin-top: 1rem;
  }
`;

const about = () => {
  return (
    <Layout>
      <AboutStyled>
        <SEO
          title="About Me"
          description="This is the about me section, Alex Quasar is a mere motral develop and Gatsby is a blazzingly fast static site generator"
        />
        <h1>About Page! </h1>
        <p>Gatsby is a Blazzingly fast static site generator. </p>
        <p>
          Alex Quasar (Aquasar) is a mere "mortal developer" who is looking for
          a good gig
        </p>

        <p>
          Below is an example of a background image optimization using Gastby
          and Graphql
        </p>

        <Hero />
      </AboutStyled>
    </Layout>
  );
};

export default about;
