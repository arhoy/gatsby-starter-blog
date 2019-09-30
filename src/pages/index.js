import React from 'react';
import Layout from '../components/layouts/Layout';
import SEO from '../hooks/SEO';
import usePosts from '../hooks/usePosts';
import Posts from '../components/posts/Posts';

export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <SEO
        title="Explore Gatsby"
        description="MERN, Gatsby and other cool stuff"
      />
      <h1>Hello Friend</h1>
      <p>
        This is the home page, I hope your curiosity to Gatsby landed you here
      </p>

      <Posts posts={posts} />
    </Layout>
  );
};
