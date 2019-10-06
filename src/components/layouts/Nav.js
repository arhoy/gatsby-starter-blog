import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import netlifyIdentity from 'netlify-identity-widget';

const Navlink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  font-size: 1.8rem;
  text-decoration: none;
  margin-right: 1rem;

  &:hover {
    color: ${props => props.theme.colors.primaryDark};
    font-weight: bolder;
  }
  &.currentPage {
    color: ${props => props.theme.colors.primaryDark};
  }
`;

const NetlifyID = styled.span`
  .netlify-identity-user,
  .netlify-identity-button,
  .netlify-identity-menu {
    color: ${props => props.theme.colors.primary};
    font-size: 1.8rem;
    text-decoration: none;
    margin-right: 1rem;
    text-decoration: none !important;

    &:hover {
      color: ${props => props.theme.colors.primaryDark};
      font-weight: bolder;
    }
    &.currentPage {
      color: ${props => props.theme.colors.primaryDark};
    }
  }
`;

const Header = styled.header`
  background: ${props => props.theme.colors.lightgrey};
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const Logo = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 2.2rem;
  & i {
    font-weight: bold;
    color: ${props => props.theme.colors.primaryDark};
  }
`;

const Nav = () => {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);
  return (
    <Header>
      <Logo>
        Aquasar <i>Blog</i>
      </Logo>
      <nav>
        <Navlink activeClassName="currentPage" to="/">
          Home
        </Navlink>
        <Navlink activeClassName="currentPage" to="/about">
          About
        </Navlink>
        <Navlink activeClassName="currentPage" to="/contact">
          Contact
        </Navlink>

        <NetlifyID data-netlify-identity-button></NetlifyID>
      </nav>
    </Header>
  );
};

export default Nav;