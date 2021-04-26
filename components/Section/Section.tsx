
import React, {useEffect, useState} from "react"

import {
    SectionWrapper,
    SectionTitle,
    SectionContent,
    SectionDescription,
    SectionImg
} from "./Section.styles"

import Container from "@components/Container"

import { SectionProps } from "./Section.d";

const Section = React.forwardRef<HTMLDivElement, SectionProps>(({
    p,
    m,
    mt,
    mb,
    pt,
    pb,
    title,
    children,
    background,
    style,
    customPadding,
    description,
    isFlex,
    isReverse,
    className,
    img,
    key
}, ref) => {

    const domRef = React.useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
      }, []);


    return (
        <SectionWrapper
            p={p}
            m={m}
            mt={mt}
            mb={mb}
            pt={pt}
            pb={pb}
            background={background}
            customPadding={customPadding}
            ref={domRef}
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            isVisible={isVisible}
            style={style}
        >
            <Container>
                <SectionContent
                    isFlex={isFlex}
                    isReverse={isReverse}
                    customPadding={customPadding}
                >
                    <SectionImg 
                        src={img} 
                        alt={title}
                        loading="lazy" 
                    />
                    <div>
                        <SectionTitle>
                            {title}
                        </SectionTitle>
                        <SectionDescription>
                            {description}
                        </SectionDescription>
                    </div>
                    <>{children}</>
                </SectionContent>
            </Container>
        </SectionWrapper>
    )
})

export default Section;