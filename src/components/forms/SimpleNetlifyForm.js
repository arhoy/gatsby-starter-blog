import React from 'react';
import styled from '@emotion/styled';
import Button from '../reusableStyles/buttons/Button';

const Field = styled.p`
  & .hidden {
    display: none;
  }
  margin-bottom: 2rem;
`;

const Label = styled.label`
  padding: 1rem;
  display: block;
  outline: none;
  & input,
  textarea {
    padding: 0.5rem;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid ${props => props.theme.colors.primaryDark};
    font-family: Poppins, Roboto;
    font-size: 1.6rem;
  }
`;

const Form = styled.form`
  border-bottom: 1rem solid ${props => props.theme.colors.primaryDark};
`;

const SimpleNetlifyForm = () => {
  return (
    <Form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      //   action="https://aquasar-starter-blog.netlify.com/thank-you/"
    >
      <Field className="hidden">
        <Label className="hidden">
          Hidden Honey Bot Spam Field: <input name="bot-field" />
        </Label>
      </Field>
      <Field>
        <Label>
          Your Name:
          <input
            placeholder="What is your given name"
            type="text"
            name="name"
            required
          />
        </Label>
      </Field>
      <Field>
        <Label>
          Your Email:
          <input
            placeholder="What is your email"
            type="email"
            name="email"
            required
          />
        </Label>
      </Field>

      <Field>
        <Label>
          Message:
          <textarea
            placeholder="Please enter a brief message"
            name="message"
            required
            minLength="10"
            maxLength="1000"
          ></textarea>
        </Label>
      </Field>
      <Field>
        <Button type="submit">Send</Button>
      </Field>
    </Form>
  );
};

export default SimpleNetlifyForm;
