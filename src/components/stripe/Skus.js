import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SkuCard from './SkuCard';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1rem 0;
`;

class Skus extends Component {
  state = {
    stripe: null,
  };

  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    const stripe = window.Stripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);
    this.setState({ stripe });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SkusForProduct {
            skus: allStripeSku(sort: { fields: [price] }) {
              edges {
                node {
                  id
                  currency
                  price
                  image
                  attributes {
                    name
                  }
                }
              }
            }
          }
        `}
        render={({ skus }) => (
          <Container>
            {skus.edges.map(({ node: sku }) => (
              <SkuCard key={sku.id} sku={sku} stripe={this.state.stripe} />
            ))}
          </Container>
        )}
      />
    );
  }
}

export default Skus;
