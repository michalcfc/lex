
import React, {useEffect, useState} from "react"

import Link from "next/link"

import {
    SectionWrapper,
    SectionTitle,
    SectionContent,
    SectionBody,
    SectionDescription,
    SectionFooter,
    SectionImg
} from "./Section.styles"

import Container from "@components/Container"
import Button from "@components/Button"

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
    link,
    img,
    noRef,
}, ref) => {

    const domRef = React.useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
      }, [isVisible]);


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
            className={`fade-in-section ${noRef || isVisible ? ' is-visible' : ''}`}
            isVisible={isVisible}
            style={style}
        >
            <Container>
                <SectionContent
                    isFlex={isFlex}
                    isReverse={isReverse}
                    customPadding={customPadding}
                >
                   {img && <SectionImg 
                        src={img} 
                        alt={title}
                        loading="lazy" 
                        isReverse={isReverse}
                    />}
                    <SectionBody>
                        <SectionDescription>
                        {title && <SectionTitle>
                            {title}
                        </SectionTitle>}
                            {description}
                        <SectionFooter>
                            {link && <Link href={link}><a><Button 
                                    variant="secondary"
                                    name="Dowiedz się więcej"
                                    onClick={() => {}}
                                    /></a></Link>}
                        </SectionFooter>
                        </SectionDescription>
                        {children}
                    </SectionBody>
                </SectionContent>
            </Container>
        </SectionWrapper>
    )
})

export default Section;