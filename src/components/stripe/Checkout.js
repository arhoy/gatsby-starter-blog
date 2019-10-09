import React from 'react';
import styled from '@emotion/styled';

const ButtonStyles = styled.button`
  fontsize: '13px';
  textalign: 'center';
  color: ${props => props.theme.colors.white};
  outline: none;
  padding: 1rem 2rem;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
  letter-spacing: 1.5px;
`;

const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_oSwAzcb38GRSqpa94uqKJNVZ');
  }

  async redirectToCheckout(event) {
    event.preventDefault();

    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: 'sku_Fx6CjWcU3JRBIH', quantity: 1 }],
      successUrl: `${window.location.origin}/success/`,
      cancelUrl: `${window.location.origin}/`,
    });

    if (error) {
      console.warn('Error:', error);
    }
  }

  render() {
    return (
      <ButtonStyles onClick={event => this.redirectToCheckout(event)}>
        BUY TESLA
      </ButtonStyles>
    );
  }
};

export default Checkout;
