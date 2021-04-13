import React, { useState, useEffect } from "react"
import {
    CarouselStyle,
    Slide,
    SlideHeader,
    SlideTitle,
    SlideBody,
    SlideFooter,
    SlideArrow,
} from "./Carousel.styles"

import { CarouselProps } from "./Carousel.d"

const Carousel: React.FC<CarouselProps> = ({slides, nbSlides, color}) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliceSlide, setSliceSlide] = useState(0)
    const [testShow, setTest] = useState(nbSlides)

    // useEffect(() => {
    //     const endSlides = currentSlide === nbSlides
    //     if(endSlides) {
    //         setSliceSlide(sliceSlide + 1)
    //     }
    //     console.log(currentSlide)
    // }, [sliceSlide, currentSlide]);

    const prevSlide = () => {
        if(currentSlide > sliceSlide) {
            setCurrentSlide(currentSlide - 1)
        } else if (testShow > nbSlides){
            setSliceSlide(sliceSlide - 1)
            setTest(testShow - 1)
        }
    }

    const nextSlide = () => {
        if(currentSlide < --nbSlides) {
            setCurrentSlide(currentSlide + 1)
        } else if (
            currentSlide === nbSlides
            && testShow < slides.length
        ){
            setSliceSlide(sliceSlide + 1)
            setTest(testShow + 1)
        }
    }

    const isCurrentSlide = (slide) => {
        if(currentSlide === slide) return true
        return false
    }

    return (
        <>
            <CarouselStyle>
                <SlideArrow
                    onClick={() => prevSlide()}
                />
                {slides
                    .slice(sliceSlide, testShow)
                    .map((slide, index) => (
                         <Slide color={isCurrentSlide(index) ? "red" : ''}>
                            <SlideTitle>{slide.name}</SlideTitle>
                            <SlideBody>{index}</SlideBody>
                            <SlideFooter></SlideFooter>
                        </Slide>
                    )
                )}
                <SlideArrow
                    onClick={() => nextSlide()}
                />
            </CarouselStyle>
        </>
    )
}

export default Carousel;