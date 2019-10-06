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
  const [formData, setFormData] = useState({});
  const handleSubmit = e => {
    e.preventDefault();
    console.log(
      'form was submitted!',
      formData.name,
      formData.email,
      formData.message,
    );
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formData,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  const handleChange = e => {
    setFormData({ [e.target.name]: e.target.value });
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
          Hidden Honey Bot Spam Field:{' '}
          <input onChange={handleChange} name="bot-field" />
        </Label>
      </Field>
      <Field>
        <Label>
          Your Name:
          <input
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
