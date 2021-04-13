import React from 'react';
import { isHomePage } from "./../../utilis/api"

import {
    MainWrapper,MainContainer
} from "./Main.styles"

import Hero from "../Hero"

const Main = ({children}) => {

    return (
        <MainWrapper
            homePage={isHomePage()}
        >
            {isHomePage() && <Hero/>}
            <MainContainer
                homePage={isHomePage()}
            >
            {children}
            </MainContainer>
        </MainWrapper>
    )
}

export default Main