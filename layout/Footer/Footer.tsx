
import React from 'react';
import Link from "next/link"

import {
    FooterWrapper,
    FooterContent,
    FooterBottom,
    FooterContact,
    FooterContactItem,
    FooterLinks,
    LinkItem
} from "./Footer.styles"

const Footer = ({
        links
    }) => {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterContact>
                    <FooterContactItem><img src="/img/lex_white.png"/></FooterContactItem>
                    <FooterContactItem>ul. Przylesie 6</FooterContactItem>
                    <FooterContactItem>60-185 Skórzewo</FooterContactItem>
                    <FooterContactItem>tel: 516-178-131</FooterContactItem>
                    <FooterContactItem>lub 61 814-38-25</FooterContactItem>
                </FooterContact>
                <FooterLinks>
                    {links.map(link => (
                        <LinkItem>{link.name}</LinkItem>
                    ))}
                </FooterLinks>
            </FooterContent>
            <FooterBottom>
                © 2021 Jachimov.pl | All Rights Reserved
            <Link href="https://github.com/michalcfc/e-commerce">
                <a target="_blank" rel="noreferrer">
                </a>
            </Link>
            </FooterBottom>
        </FooterWrapper>
    )
}

export default Footer