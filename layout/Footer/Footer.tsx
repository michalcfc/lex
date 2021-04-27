
import React from 'react';
import Link from "next/link"

import Container from "components/Container"

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome'

import {
    faFacebookF,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import {
    faMapMarked,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'

import {
    FooterWrapper,
    FooterContent,
    FooterBottom,
    FooterColumn,
    FooterContactItem,
    FooterSocialIcon,
    FooterSocialIcons,
    FooterColumnTitle,
    FooterLogo,
    FooterLinkItem,
    StyledLink
} from "./Footer.styles"

const Footer = ({
    footerLinks
    }) => {
    return (
        <FooterWrapper>
            <Container>
            <FooterContent>
                <FooterColumn>
                    <FooterLogo src="/img/lex_white.png" alt="lexell.pl" />
                    <p>
                        LEXELL to firma działająca na rynku od 1992 roku. 
                        W swojej ofercie mamy internet radiowy oraz serwis komputerów i laptopów. 
                    </p>
                    <FooterSocialIcons>
                            <FooterSocialIcon>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </FooterSocialIcon>
                            <FooterSocialIcon>
                                <FontAwesomeIcon icon={faInstagram} />
                            </FooterSocialIcon>
                        </FooterSocialIcons>
                </FooterColumn>
                    {footerLinks.map(section => (
                    <FooterColumn>
                        <FooterColumnTitle> 
                            {section.header} 
                        </FooterColumnTitle>
                        <ul>
                            {section.link.map(l => {
                                return (
                                    <FooterLinkItem>
                                       <StyledLink href={"lexell.pl"}> 
                                            {l.name} 
                                        </StyledLink>
                                    </FooterLinkItem>
                                )
                            })}
                        </ul>
                    </FooterColumn>
                    ))}
                    <FooterColumn>
                        <FooterColumnTitle>
                            Adres firmy
                        </FooterColumnTitle>
                        
                        <FooterContactItem>
                            <FooterSocialIcon>
                                <FontAwesomeIcon icon={faMapMarked} />
                            </FooterSocialIcon>
                            ul. Przylesie 6, <br/>
                            60-185 Skórzewo
                        </FooterContactItem>
                            
                        <FooterContactItem>
                            <FooterSocialIcon>
                                <FontAwesomeIcon icon={faPhone} />
                            </FooterSocialIcon>
                                61 814-38-25 <br/>
                                +48 516-178-131
                        </FooterContactItem>

                        <FooterContactItem>
                            <FooterSocialIcon>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </FooterSocialIcon>
                                <StyledLink href={"/contact"}> 
                                    Napisz do nas
                                </StyledLink>
                        </FooterContactItem>

                    </FooterColumn>
            </FooterContent>
            <FooterBottom>
           
                <Link href="https://jachimov.pl">
                    <a target="_blank" rel="noreferrer">
                    © 2021 Jachimov.pl | All Rights Reserved
                    </a>
                </Link>
            </FooterBottom>
            </Container>
        </FooterWrapper>
    )
}

export default Footer