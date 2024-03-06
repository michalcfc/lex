import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { isHomePage, currentPath } from './../../utilis/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faUser, faBars } from '@fortawesome/free-solid-svg-icons';

import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import Container from 'components/Container';
import Progress from 'components/Progress';

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
} from './Header.styles';

import Menu from './sub/Menu';
import MobileMenu from './sub/MobileMenu';
import { HeaderProps } from './Header.d';
import App from '../../pages/_app';
import { queryHomeContent } from '../../utilis/prismicQueries';
const SCROLL_DISTANCE = 10;

const Header = ({ homeDoc }) => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const isHome = isHomePage();

  useEffect(() => {
    if (isMenuOpen) {
      setMenuOpen(!isMenuOpen);
    }

    if (typeof window !== 'undefined') {
      const mobile = window.innerWidth < 900;
      if (mobile) {
        setMobile(true);
      }
    }

    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > SCROLL_DISTANCE);
    });
  }, []);

  const changeLogo = () => {
    switch (currentPath()) {
      case '/':
        return '/img/logos/lex_white.png';
      case '/clientChoose':
        return '/img/logos/internet.png';
      case '/internet':
        return '/img/logos/internet.png';
      case '/internet/[slug]':
        return '/img/logos/internet.png';
      case '/helpDesk':
        return '/img/logos/help_desk.png';
      case '/helpDesk/[slug]':
        return '/img/logos/help_desk.png';
      case '/computer':
        return '/img/logos/computer.png';
      case '/computer/[slug]':
        return '/img/logos/computer.png';
      case '/energy':
        return '/img/logos/energy.png';
      case '/energy/[slug]':
        return '/img/logos/energy.png';
      case '/smart':
        return '/img/logos/smart.png';
      case '/smart[slug]':
        return '/img/logos/smart.png';
      case '/building':
        return '/img/logos/building.png';
      case '/building[slug]':
        return '/img/logos/building.png';
      default:
        return '/img/logos/logo.png';
    }
  };

  if (homeDoc) {
    const forDeveloperLabel = homeDoc.for_developer_label;
    const forDeveloperUrl = homeDoc.for_developer._meta.uid;
    const forBusinessLabel = homeDoc.for_business_label;
    const forBusinessUrl = homeDoc.for_business._meta.uid;
    const facebookUrl = homeDoc.social_fb.url;
    const instagramUrl = homeDoc.social_insta.url;
    const openHours = homeDoc.open_hours;
    const phoneNumber = homeDoc.phone_number;
    const phoneNumberUrl = homeDoc.phone_number_url.url;
    return (
      <HeaderWrapper position={isHome && scroll} homePage={isHome}>
        <HeaderTopInfoWrapper position={isHome && scroll}>
          <Container>
            <HeaderTopInfoContent>
              <HeaderTopInfoItems>
                <HeaderTopInfoItems>
                  <a href={facebookUrl} target="_blank" rel="noreferrer">
                    <SocialIcon>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </SocialIcon>
                  </a>
                  <a href={instagramUrl} target="_blank" rel="noreferrer">
                    <SocialIcon>
                      <FontAwesomeIcon icon={faInstagram} />
                    </SocialIcon>
                  </a>
                </HeaderTopInfoItems>
                <HeaderTopInfoItems>
                  <Link href={`/${forBusinessUrl}`}>
                    <HeaderTopInfoItem>{forBusinessLabel}</HeaderTopInfoItem>
                  </Link>
                  <Link href={`/${forDeveloperUrl}`}>
                    <HeaderTopInfoItem>{forDeveloperLabel}</HeaderTopInfoItem>
                  </Link>
                </HeaderTopInfoItems>
              </HeaderTopInfoItems>
              <HeaderTopInfoItems>
                <HeaderTopInfoItem>
                  <FontAwesomeIcon icon={faClock} /> {openHours}
                </HeaderTopInfoItem>
                <HeaderTopInfoItem>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href={phoneNumberUrl}>{phoneNumber}</a>
                </HeaderTopInfoItem>
                {/* <HeaderTopInfoItem>
                          <FontAwesomeIcon icon={faUser} />Panel klienta
                        </HeaderTopInfoItem> */}
              </HeaderTopInfoItems>
            </HeaderTopInfoContent>
          </Container>
        </HeaderTopInfoWrapper>
        <HeaderContentWrapper position={scroll} homePage={isHome}>
          <Container>
            <HeaderContent>
              <BrandLogo>
                {scroll ? (
                  <Link href="/">
                    <img src="/img/logo.png" />
                  </Link>
                ) : (
                  <Link href="/">
                    <img src={changeLogo()} />
                  </Link>
                )}
              </BrandLogo>
              {!isMobile ? <Menu /> : <MobileMenu setMenuOpen={setMenuOpen} isOpen={isMenuOpen} />}
            </HeaderContent>
          </Container>
        </HeaderContentWrapper>
        {isHome && <Progress />}
      </HeaderWrapper>
    );
  }
};

export default Header;
