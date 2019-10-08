import React from 'react';
import styled from '@emotion/styled';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
import { FaSketch } from 'react-icons/fa';

const Container = styled.div`
  display: grid;
  background: ${props => props.theme.colors.lightgrey};
  border-radius: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 28rem;
  margin: 2rem;
  padding: 1rem;
  & h4 {
    grid-column: 1/-1;
    text-align: center;
  }
  & p {
    color: ${props => props.theme.colors.primaryDark};
    grid-column: 1/-1;
  }
`;

const Image = styled.img`
  width: 6rem;
  height: 6rem;
  background-size: contain;
  grid-column: 2/-1;
  display: flex;
  justify-self: flex-end;
`;

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2);
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  return numberFormat.format(price);
};

const SkuCard = class extends React.Component {
  async redirectToCheckout(event, sku, quantity = 1) {
    event.preventDefault();
    const { error } = await this.props.stripe.redirectToCheckout({
      items: [{ sku, quantity }],
      successUrl: `${window.location.origin}/success/`,
      cancelUrl: `${window.location.origin}/advanced`,
    });

    if (error) {
      console.warn('Error:', error);
    }
  }

  render() {
    const sku = this.props.sku;
    return (
      <Container>
        <h4>{sku.attributes.name}</h4>
        <p>
          <FaSketch /> Price: {formatPrice(sku.price, sku.currency)}
        </p>

        <ButtonStyle2
          style={{ gridColumn: '1/2' }}
          onClick={event => this.redirectToCheckout(event, sku.id)}
        >
          BUY NOW
        </ButtonStyle2>
        <Image src={sku.image} />
      </Container>
    );
  }
};

export default SkuCard;
