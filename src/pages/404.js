import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Hero from '../components/heros/Hero';
import styled from '@emotion/styled';

const NotFoundStyled = styled.div`
  p {
    margin-top: 1rem;
  }
`;

const NotFound = () => {
  return (
    <Layout>
      <NotFoundStyled>
        <SEO title="NOT FOUND PAGE" description="The page you are looking for has returned 404 not found" />
        <h1>The page you are looking for may have moved or does not exist!</h1>

      </NotFoundStyled>
    </Layout>
  );
};

export default NotFound;
