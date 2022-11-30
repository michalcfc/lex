
import React, {useEffect, useState} from 'react';
import Link from "next/link"

import Container from "components/Container"

import {RichText} from "prismic-reactjs";

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
    StyledLink,
    FooterLinkList
} from "./Footer.styles"
import {queryFooterContent} from "../../utilis/prismicQueries";

const Footer = () => {

    const [footerDoc, setFooterDoc] = useState(null);
    const [loader, setLoader] = useState(true);

    // Fetch the Prismic initial Prismic content on page load
    useEffect(() => {
        const fetchPrismicContent = async () => {
            const queryResponse = await queryFooterContent();
            const homeDocContent = queryResponse.data.allFooters.edges[0].node;
            if (homeDocContent) {
                setFooterDoc(homeDocContent);
                setLoader(false)
            }
        };
        fetchPrismicContent();
    }, []);

    if (loader) {
        return <>loading</>;
    }

    if(footerDoc) {

        return (
            <FooterWrapper>
                <Container>
                    <FooterContent>
                        <FooterColumn>
                            <FooterLogo src="/img/logos/lex_white.png" alt="lexell.pl" />
                            <p>
                                <RichText render={footerDoc.about_us} />
                            </p>
                            <FooterSocialIcons>
                                <a href={footerDoc.social_fb.url} >
                                <FooterSocialIcon>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </FooterSocialIcon>
                                </a>
                                <a href={footerDoc.social_insta.url} >
                                    <FooterSocialIcon>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </FooterSocialIcon>
                                </a>
                            </FooterSocialIcons>
                        </FooterColumn>
                            <FooterColumn>
                                <FooterColumnTitle>
                                    Nasze rozwiązania
                                </FooterColumnTitle>
                                <FooterLinkList>
                                    {footerDoc.footer_links.map((link, id) => {
                                        return (
                                            <FooterLinkItem key={id}>
                                                {link.link._linkType == 'Link.web' ? <StyledLink href={link.link.url} target={"_blank"}>
                                                        {link.link_label[0].text}
                                                    </StyledLink>  :
                                                <StyledLink href={link.link._meta.uid}>
                                                    {link.link_label[0].text}
                                                </StyledLink>}
                                            </FooterLinkItem>
                                        )
                                    })}
                                </FooterLinkList>
                            </FooterColumn>
                        <FooterColumn>
                            <FooterColumnTitle>
                                Adres firmy
                            </FooterColumnTitle>

                            <FooterContactItem>
                                <FooterSocialIcon>
                                    <FontAwesomeIcon icon={faMapMarked} />
                                </FooterSocialIcon>
                                {footerDoc.street} <br/>
                                {footerDoc.city}
                            </FooterContactItem>

                            <FooterContactItem>
                                <FooterSocialIcon>
                                    <FontAwesomeIcon icon={faPhone} />
                                </FooterSocialIcon>
                                {footerDoc.phone_one} <br/>
                                {footerDoc.phone_two}
                            </FooterContactItem>

                            <FooterContactItem>
                                <FooterSocialIcon>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </FooterSocialIcon>
                                <StyledLink href={"/contact"}>
                                    {footerDoc.contact_label}
                                </StyledLink>
                            </FooterContactItem>

                        </FooterColumn>
                    </FooterContent>
                    <FooterBottom>

                        <Link href="https://jachimov.pl" target="_blank" rel="noreferrer">
                                © 2021 Jachimov.pl | All Rights Reserved
                        </Link>
                    </FooterBottom>
                </Container>
            </FooterWrapper>
        )

    }

}

export default Footer