import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../hooks/SEO';

export default () => (
  <Layout>
    <SEO
      title="Explore Gatsby"
      description="MERN, Gatsby and other cool stuff"
    />
    <h1>Hello Friend</h1>
    <p>
      This is the home page, I hope your curiosity to Gatsby landed you here
    </p>
  </Layout>
);
