import { useContext, createContext } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../themes';
import { GlobalStyles } from './../shared/styles';
import "./../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS


import Layout from "../layout"
import Home from "./index";
import Header from "../layout/Header";


export default function App(
    {
        Component,
        pageProps,
    }
) {

  return (
    <>
      <ThemeProvider 
        theme={lightTheme}
      >
      <GlobalStyles />
        <Layout>
              <Component 
                {...pageProps} 
                />
        </Layout>
      </ThemeProvider>

    </>
  )
}


