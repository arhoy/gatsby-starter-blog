import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import netlifyIdentity from 'netlify-identity-widget';
import { FaBeer, FaAlignRight } from 'react-icons/fa';
import links from '../../constants/navLinks';
import DropDownMenu1 from '../Links/DropDownMenu1';
import Navlink from '../Links/Navlink';

const Header = styled.header`
  background: ${props => props.theme.colors.lightgrey};
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 600px) {
    height: 25rem;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

const Logo = styled.span`
  color: ${props => props.theme.colors.primary};

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
    margin-top: 5rem;
    position: absolute;
  }
  &.hideMe {
    display: none;
  }
`;

const BurgerIcon = styled(FaBeer)`
  cursor: pointer;
  font-size: 20px;
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
        <Navlink to="/">
          <i>A</i>quasar
        </Navlink>
      </Logo>

      <NavContainer className={isOpen ? '' : 'hideMe'}>
        {links.map(link => (
          <Navlink key={link.path} activeClassName="currentPage" to={link.path}>
            {link.text}
          </Navlink>
        ))}
        <DropDownMenu1 />

        <a
          href="https://ko-fi.com/alexquasar"
          target="_blank"
          rel="noopener noreferrer"
          title="Buy me a Kofi-Beer!"
        >
          <BurgerIcon />
        </a>
      </NavContainer>
      <FaAlignRight onClick={burgerIconHandler} />
    </Header>
  );
};

export default Nav;
