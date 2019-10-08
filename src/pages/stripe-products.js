import React from 'react';
import Layout from '../components/layouts/Layout';
import Skus from '../components/stripe/Skus';

const StripeProducts = () => {
  return (
    <Layout>
      <h1>Sample Ecommerce Page powered by Stripe</h1>
      <Skus />
    </Layout>
  );
};

export default StripeProducts;
