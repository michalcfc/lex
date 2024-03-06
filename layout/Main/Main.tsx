import React from 'react';
import { isHomePage } from './../../utilis/api';

import { queryHomeContent } from './../../utilis/prismicQueries';

import { MainWrapper, MainContainer } from './Main.styles';

import Hero from '../Hero';

const Main = ({ children, homeDoc }) => {
  const isHome = isHomePage();
  return (
    <MainWrapper homePage={isHome}>
      {isHome && <Hero homeDoc={homeDoc} />}
      <MainContainer homePage={isHome}>{children}</MainContainer>
    </MainWrapper>
  );
};

export default Main;
