import React from 'react';
import { Global, css } from '@emotion/core';
import Nav from './Nav';
import { ThemeProvider } from 'emotion-theming';

// real global scss styles
import '../../scss/main.scss';

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
        <header>
          <Nav />
        </header>

        <main
          css={css`
            margin: 2rem;
          `}
        >
          {children}
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
