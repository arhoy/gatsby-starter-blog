import React from 'react';
import { Global, css } from '@emotion/core';
import Nav from './Nav';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';

// real global scss styles
import '../../scss/main.scss';
import Footer from './Footer';

const theme = {
  colors: {
    primary: '#298FCA',
    primaryDark: '#094C72',
    primaryLight: 'rgb(188, 217, 234)',
    secondary: 'rgb(195,119,224)',
    lightgrey: 'rgb(250, 248, 248)',
    white: '#fff',
    black: 'rgb(31, 19, 19)',
    darkgrey: 'rgb(109, 109, 109)',
  },
};

const Div = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(8, [col-start] minmax(min-content, 1fr) [col-end])
    [center-end] 1fr [full-end];
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const NavLayout = styled.header`
  grid-column: center-start/center-end;
`;

const Main = styled.main`
  margin-top: 3rem;
  grid-column: center-start/center-end;
`;

const FooterLayout = styled.footer`
  grid-column: center-start/center-end;
`;

const Layout = ({ children }) => {
  const white = '#fff';
  const red = 'rgba(138, 35, 12,0.7)';

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          body {
            background: ${white};
            margin: 0;
            font-family: Poppins, Roboto, Helvetica, Arial, sans-serif;
          }

          h1 {
            color: ${red};
            font-family: Mansalva;
          }
        `}
      />

      <ThemeProvider theme={theme}>
        <Div>
          <NavLayout>
            <Nav />
          </NavLayout>
          <Main>{children}</Main>
          <FooterLayout>
            <Footer />
          </FooterLayout>
        </Div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
