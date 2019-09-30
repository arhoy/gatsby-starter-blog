import React from 'react';
import socialIcons from '../../constants/socialIcons';
import styled from '@emotion/styled';

const d = new Date().getFullYear();

const FooterStyle = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  a {
    color: black;
    font-size: 3rem;
    margin: 1rem;
    padding: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <ul>
        {socialIcons.map(icon => (
          <a
            key={icon.url}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </a>
        ))}
      </ul>
      <p>Aquasar Blog {d} &copy; </p>
    </FooterStyle>
  );
};

export default Footer;
