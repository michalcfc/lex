import Slider from "@components/Slider"
import Section from "@components/Section"

import {

} from "./LogoCarousel.styles"

import {
    LogoCarouselProps
} from "./LogoCarousel.d"

const LogoCarousel: React.FC<LogoCarouselProps> = ({
    logos
 }) => {

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
