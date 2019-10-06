import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import styled from '@emotion/styled';
import Button from '../reusableStyles/buttons/Button';

// Function to Make Netlify Submission and Gatsby Work
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const userData = {
      name,
      email,
      message,
    };

    console.log('form was submitted!', userData);

    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        name: userData.name,
        email: userData.email,
        message: userData.message,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <Form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/thank-you/"
      onSubmit={handleSubmit}
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
            onChange={event => setName(event.target.value)}
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
            onChange={event => setEmail(event.target.value)}
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
            onChange={event => setMessage(event.target.value)}
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
