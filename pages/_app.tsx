import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './../themes';
import { GlobalStyles } from './../shared/styles';
import "./../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS

import Layout from "../layout"
import {repoName} from "../prismic-configuration";


export default function App(
    {
        Component,
        pageProps,
    }
) {

  return (
      <PrismicProvider
          // eslint-disable-next-line react/no-unstable-nested-components
          internalLinkComponent={({ href, ...props }) => (
              <Link href={href} {...props} />
          )}
      >
          <PrismicPreview repositoryName={repoName}>
      <ThemeProvider 
        theme={lightTheme}
      >
      <GlobalStyles />
        <meta 
            name="viewport" 
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" 
          />
        <Layout>
              <Component 
                {...pageProps} 
                />
        </Layout>
      </ThemeProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}


