import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import Insta from '../components/Insta';

export default () => {
  return (
    <Layout>
      <SEO
        title="Explore Gatsby"
        description="MERN, Gatsby and other cool stuff"
      />
      <h1>Alex Quasar</h1>
      <p>
        This is the home page. I hope your curiosity to Gatsby and Full Stack
        Development landed you here! This page documents my journey of Full
        Stack Development. I write articles and create websites (using Gatsby!)
        for clients and companies. I am open to opportunities and alway learning
      </p>

      <h2>Latest Articles</h2>

      <h2>React Articles</h2>

      <h2>Gatsby Articles</h2>

      <h2>Mongo DB Articles</h2>

      <h2>Latest Websites</h2>

      <h2>VS Code Set Up</h2>

      <Insta />
    </Layout>
  );
};
