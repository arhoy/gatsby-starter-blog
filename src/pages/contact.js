import React from 'react';
import Wave from '../components/Wave.js';
import SimpleNetlifyForm from '../components/forms/SimpleNetlifyForm';
import Layout from '../components/layouts/Layout';

const contact = () => {
  return (
    <Layout>
      <h1> Contact Page </h1>
      <Wave />
      Alternatively, you can reach me at alex@cravejs.com
      <SimpleNetlifyForm />
    </Layout>
  );
};

export default contact;
