import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import netlifyIdentity from 'netlify-identity-widget';
import { FaBeer } from 'react-icons/fa';
import links from '../../constants/navLinks';

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

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  &.hideNav {
    display: none;
  }
  @media (max-width: 600px) {
    flex-direction: row;
    margin-top: 4rem;
    position: absolute;
  }
  &.hideMe {
    display: none;
  }
`;

const BurgerIcon = styled(FaBeer)`
  cursor: pointer;
  font-size: 25px;
  margin-top: 4px;
  color: ${props => props.theme.colors.primaryDark};
  @media (min-width: 600px) {
    margin: 0;
  }
`;

const Nav = () => {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);
  const [isOpen, setIsOpen] = useState(true);
  const burgerIconHandler = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };
  return (
    <Header>
      <Logo>
        Aquasar <i>Blog</i>
      </Logo>

      <NavContainer className={isOpen ? '' : 'hideMe'}>
        {links.map(link => (
          <Navlink key={link.path} activeClassName="currentPage" to={link.path}>
            {link.text}
          </Navlink>
        ))}
        <NetlifyID data-netlify-identity-button></NetlifyID>
      </NavContainer>
      <BurgerIcon onClick={burgerIconHandler} />
    </Header>
  );
};

export default Nav;
