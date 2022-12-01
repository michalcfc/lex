import React from 'react';
import { isHomePage } from "./../../utilis/api"

import {queryHomeContent} from "./../../utilis/prismicQueries";

import {
    MainWrapper,MainContainer
} from "./Main.styles"

import Hero from "../Hero"

const Main = ({children, homeDoc}) => {

    return (
        <MainWrapper
            homePage={isHomePage()}
        >
            {isHomePage() && <Hero homeDoc={homeDoc}/>}
            <MainContainer
                homePage={isHomePage()}
            >
            {children}
            </MainContainer>
        </MainWrapper>
    )
}

export default Main