import React from 'react';

import Main         from "./Main"
import Header       from "./Header"
import Footer       from "./Footer"
import Wrapper      from "./Wrapper"

import {
    faTv,
    faWifi,
    faUpload,
    faTools
} from "@fortawesome/free-solid-svg-icons";

import {
    faChromecast,
} from "@fortawesome/free-brands-svg-icons"


const Layout = ({children}) => {

    const menuLinks = [
        {
            id: 1,
            name: 'Strona główna',
            hasSubmenu: false,
            url: "/"
        },
        {
            id: 2,
            name: 'Usługi',
            hasSubmenu: true,
            url: '',
            subLinks: [
                {
                    id: 1,
                    icon: faWifi,
                    name: 'Internet',
                    url: '/opticalfiber'
                },
                {
                    id: 2,
                    icon: faTv,
                    name: 'Telewizja',
                    url: '/television'
                },
                {
                    id: 3,
                    icon: faChromecast,
                    name: 'TV + Internet',
                    url: '/tv-network'
                },
                {
                    id: 3,
                    icon: faTools,
                    name: 'Usługi IT',
                    url: '/service'
                },
                {
                    id: 4,
                    icon: faUpload,
                    name: 'Transmisja danych',
                    url: '/transmision'
                },
            ]
        },
        {
            id: 3,
            name: 'O nas',
            hasSubmenu: false,
            url: "/about"
        },
        {
            id: 4,
            name: 'Światłowód',
            hasSubmenu: false,
            url: "/"
        },
        {
            id: 5,
            name: "Kontakt",
            hasSubmenu: false,
            url: "/contact"
        }

    ]

    const footerLinks = [
        {
            id: 1,
            header: 'Usługi',
            link: [
                {
                    id: 1,
                    name: 'Internet światłowodowy',
                    url: ''
                },
                {
                    id: 2,
                    name: 'Internet radiowy',
                    url: ''
                },
                {
                    id: 3,
                    name: 'Telewizja',
                    url: ''
                },
                {
                    id: 4,
                    name: 'Serwis',
                    url: ''

                }
            ]
        },
        {
            id: 2,
            header: 'Inne usługi',
            link: [
                {
                    id: 1,
                    name: 'Monitoring',
                    url: ''
                },
                {
                    id: 2,
                    name: 'Prace budowlane w zakresie przyłączy',
                    url: ''
                },
                {
                    id: 3,
                    name: 'Sieci telekomunikacyjnych',
                    url: ''
                },
                {
                    id: 4,
                    name: 'Wykonastwo sieci w budynkach',
                    url: ''
                },
                {
                    id: 5,
                    name: 'Usługi maszynami budowlanymi',
                    url: ''
                }
            ]
        },
    ]

    return (
       
        <Wrapper>
            <Header
                links={menuLinks}
                isMobile={children.props.isMobile}
            />
            <Main>
                {children}
            </Main>
            <Footer
                footerLinks={footerLinks}
            />
        </Wrapper>
        
    )
}

export default Layout