import Slider from "@components/Slider"
import Section from "@components/Section"

import {

} from "./LogoCarousel.styles"

import {
    LogoCarouselProps
} from "./LogoCarousel.d"

const LogoCarousel: React.FC<LogoCarouselProps> = ({

 }) => {

    const logos = [
        {
            id: 1,
            name: 'Lexell',
            img: "/img/logos/large/internet.png",
            url: '/internet'
        },
        {
            id: 2,
            name: 'Lexell',
            img: "/img/logos/large/help_desk.png",
            url: '/helpDesk'
        },
        {
            id: 3,
            name: 'Lexell',
            img: "/img/logos/large/computer.png",
            url: '/computer'
        },
        {
            id: 4,
            name: 'Lexell',
            img: "/img/logos/large/energy.png",
            url: '/energy'
        },
        {
            id: 5,
            name: 'Lexell',
            img: "/img/logos/large/smart.png",
            url: '/smart'
        },
        {
            id: 6,
            name: 'Lexell',
            img: "/img/logos/large/building.png",
            url: '/building'
        },
        {
            id: 7,
            name: 'Lexell',
            img: "/img/logos/large/telecom.png",
            url: '/building'
        },
        {
            id: 8,
            name: 'Lexell',
            img: "/img/logos/large/internet.png",
            url: '/internet'
        },
        {
            id: 9,
            name: 'Lexell',
            img: "/img/logos/large/help_desk.png",
            url: '/helpDesk'
        },
        {
            id: 10,
            name: 'Lexell',
            img: "/img/logos/large/computer.png",
            url: '/computer'
        },
        {
            id: 11,
            name: 'Lexell',
            img: "/img/logos/large/energy.png",
            url: '/energy'
        },
        {
            id: 12,
            name: 'Lexell',
            img: "/img/logos/large/smart.png",
            url: '/smart'
        },
        {
            id: 13,
            name: 'Lexell',
            img: "/img/logos/large/building.png",
            url: '/building'
        },
        {
            id: 14,
            name: 'Lexell',
            img: "/img/logos/large/telecom.png",
            url: '/building'
        },
    ]

    return (
        <>
            <h2>Nasi partnerzy</h2>
            <Slider
                items={logos}
            />
        </>
    )
}

export default LogoCarousel;
