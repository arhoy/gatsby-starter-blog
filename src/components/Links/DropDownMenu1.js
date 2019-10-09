import React from 'react';
import styles from '../../scss/hover-drop-downs/hoverdropdown1.module.scss';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Navlink = styled(Link)`
  color: ${props => props.theme.colors.primaryDark};
  font-weight: bold;
`;

const NetlifyID = styled.span`
  .netlify-identity-user,
  .netlify-identity-button,
  .netlify-identity-menu {
    color: ${props => props.theme.colors.primaryDark};
    text-decoration: none;
    text-decoration: none !important;
    font-weight: bolder;
  }
`;

const Button = styled.button`
  color: ${props => props.theme.colors.primary};
  font-size: 1.8rem;
  text-decoration: none;
  margin-right: 1rem;
  outline: none;
  border: none;
  background: transparent;
  position: relative;

  &:hover {
    color: ${props => props.theme.colors.primaryDark};
    font-weight: bolder;
  }
  &:after {
    content: '▼';
    font-size: 1.3rem;
    transform: translate(-3px, 0px);
    display: inline-block;
  }
`;

const DropDownContent = styled.div`
  background: ${props => props.theme.colors.lightgrey};
`;
const DropDownMenu1 = () => {
  return (
    <div className={styles.dropdown}>
      <Button className={styles.dropbtn}>Explore </Button>
      <DropDownContent className={styles.dropdownContent}>
        <Navlink to="/new-articles">New Articles</Navlink>
        <Navlink to="/stripe-products">Products</Navlink>
        <Navlink to="/contact">Contact Me</Navlink>
        <NetlifyID data-netlify-identity-button></NetlifyID>
      </DropDownContent>
    </div>
  );
};

export default DropDownMenu1;
