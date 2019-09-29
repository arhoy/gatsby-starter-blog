import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../hooks/SEO';

const about = () => {
  return (
    <Layout>
      <SEO 
        title = "About Me" 
        description = "This is the about me section, Alex Quasar is a mere motral develop and Gatsby is a blazzingly fast static site generator"
      />
      <h1>About Page! </h1>
      <p>Gatsby is a Blazzingly fast static site generator. </p>
      <p>
        Alex Quasar (Aquasar) is a mere "mortal developer" who is looking for a
        good gig
      </p>
    </Layout>
  );
};

export default about;
