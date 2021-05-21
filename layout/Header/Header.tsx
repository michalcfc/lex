import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { isHomePage, currentPath } from "./../../utilis/api"
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
import Progress from "components/Progress"

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
    const [scrolled, setScroled] = useState(null)
    const [scroll, setScroll] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isMobile, setMobile] = useState(false)
    const router = useRouter();

    console.log(router.pathname)

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

    const changeLogo = () => {
        switch (currentPath()) {
            case '/':
                return '/img/logos/lex_white.png'
            case '/clientChoose':
                return '/img/logos/internet.png'
            case '/internet':
                return '/img/logos/internet.png'
            case '/internet/[slug]':
                return '/img/logos/internet.png'
            case '/helpDesk':
                return '/img/logos/help_desk.png'
            case '/helpDesk/[slug]':
                return '/img/logos/help_desk.png'
            case '/computer':
                return '/img/logos/computer.png'
            case '/computer/[slug]':
                return '/img/logos/computer.png'
            case '/energy':
                return '/img/logos/energy.png'
            case '/energy/[slug]':
                return '/img/logos/energy.png'
            case '/smart':
                return '/img/logos/smart.png'
            case '/smart[slug]':
                return '/img/logos/smart.png'
            case '/building':
                return '/img/logos/building.png'
            case '/building[slug]':
                return '/img/logos/building.png'
            default:
                return '/img/logos/logo.png'
        }
    }


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
                        {/* <HeaderTopInfoItems>
                            <HeaderTopInfoItem>Dla firmy</HeaderTopInfoItem>
                            <HeaderTopInfoItem>Dla dewelopera</HeaderTopInfoItem>
                        </HeaderTopInfoItems> */}
                    </HeaderTopInfoItems>
                    <HeaderTopInfoItems>
                        <HeaderTopInfoItem>
                           <FontAwesomeIcon icon={faClock} /> Pon - Pt: 8:00 - 17:00
                        </HeaderTopInfoItem>
                        <HeaderTopInfoItem>
                            <FontAwesomeIcon icon={faPhone} />
                            <a href="tel:+48516178131">
                                516-178-131
                            </a>
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
                         {scroll ? <Link href="/">
                                <img src="/img/logo.png"/>
                            </Link> :   <Link href="/">
                                <img src={changeLogo()}/>
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
            {isHomePage() && <Progress/>}
        </HeaderWrapper>
    )
}

export default Header