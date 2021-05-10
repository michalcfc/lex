import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { isHomePage } from "./../../utilis/api"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faClock,
    faPhone,
    faUser,
    faBars,
} from '@fortawesome/free-solid-svg-icons'

import {
    faInstagram,
    faFacebookF
} from '@fortawesome/free-brands-svg-icons'

import Container from "components/Container"

import {
    BrandLogo,
    SocialIcon,
    HeaderWrapper,
    HeaderContentWrapper,
    HeaderContent,
    HeaderTopInfoWrapper,
    HeaderTopInfoContent,
    HeaderTopInfoItems,
    HeaderTopInfoItem,
} from "./Header.styles"

import Menu from "./sub/Menu"
import MobileMenu from "./sub/MobileMenu"
import {HeaderProps} from "./Header.d";
import App from "../../pages/_app";
const SCROLL_DISTANCE = 10

const Header: React.FC<HeaderProps> = ( {
    links,
}) => {
        const [scroll, setScroll] = useState(false)
        const [isMenuOpen, setMenuOpen] = useState(false)
         const [isMobile, setMobile] = useState(false)
            const router = useRouter();


        useEffect(() => {

            if (isMenuOpen) {
                setMenuOpen(!isMenuOpen);
            }

            if (typeof window !== 'undefined') {
               const mobile = window.innerWidth < 900
                if(mobile) {
                    setMobile(true)
                }

            }
          window.addEventListener("scroll", () => {
            setScroll(window.scrollY > SCROLL_DISTANCE);
          });
        }, []);

    return (
        <HeaderWrapper
          position={isHomePage() && scroll}
          homePage={isHomePage()}
        >
            <HeaderTopInfoWrapper
                position={isHomePage() && scroll}
            >
                <Container>
                <HeaderTopInfoContent>
                    <HeaderTopInfoItems>
                        <HeaderTopInfoItems>
                            <SocialIcon><FontAwesomeIcon icon={faFacebookF} /></SocialIcon>
                            <SocialIcon><FontAwesomeIcon icon={faInstagram} /></SocialIcon>
                        </HeaderTopInfoItems>
                        {/*<HeaderTopInfoItems>*/}
                        {/*    <HeaderTopInfoItem>Dla domu</HeaderTopInfoItem>*/}
                        {/*    <HeaderTopInfoItem>Dla firmy</HeaderTopInfoItem>*/}
                        {/*    <HeaderTopInfoItem>Dla dewelopera</HeaderTopInfoItem>*/}
                        {/*</HeaderTopInfoItems>*/}
                    </HeaderTopInfoItems>
                    <HeaderTopInfoItems>
                        <HeaderTopInfoItem>
                           <FontAwesomeIcon icon={faClock} /> Pon - Pt: 8:00 - 17:00
                        </HeaderTopInfoItem>
                        <HeaderTopInfoItem>
                            <FontAwesomeIcon icon={faPhone} /> 516-178-131
                        </HeaderTopInfoItem>
                        {/* <HeaderTopInfoItem>
                          <FontAwesomeIcon icon={faUser} />Panel klienta
                        </HeaderTopInfoItem> */}
                    </HeaderTopInfoItems>
                </HeaderTopInfoContent>
                </Container>
            </HeaderTopInfoWrapper>
            <HeaderContentWrapper
                position={scroll}
                homePage={isHomePage()}
            >
                <Container>
                    <HeaderContent>
                        <BrandLogo>
                         {scroll || !isHomePage() ?<Link href="/">
                                <img src="/img/logo.png"/>
                            </Link> :   <Link href="/">
                                <img src="/img/lex_white.png"/>
                            </Link>}
                        </BrandLogo>
                        {!isMobile ? <Menu
                            links={links}
                            />
                        : <MobileMenu
                                links={links}
                                setMenuOpen={setMenuOpen}
                                isOpen={isMenuOpen}
                            />}
                    </HeaderContent>
                </Container>
            </HeaderContentWrapper>
        </HeaderWrapper>
    )
}

export default Header