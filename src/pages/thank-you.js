import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Hero from '../components/heros/Hero';
import styled from '@emotion/styled';

const thankyouStyled = styled.div`
  p {
    margin-top: 1rem;
  }
`;

const thankyou = () => {
  return (
    <Layout>
      <thankyouStyled>
        <SEO title="Thank you form" description="This is the thank you page." />
        <h1>Your form submission was recieved. Thank you!</h1>

        <Hero />
      </thankyouStyled>
    </Layout>
  );
};

export default thankyou;
