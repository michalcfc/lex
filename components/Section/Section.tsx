
import React, {useEffect, useState} from "react"

import Link from "next/link"

import {
    SectionWrapper,
    SectionTitle,
    SectionContent,
    SectionBody,
    SectionDescription,
    SectionFooter,
    SectionImg,
    SectionLinks,
    SectionFigure,
    AbsoluteText,
    AbsoluteContent
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
    logo,
    categories,
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
    const [showServices, setShowServices] = useState(false);

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
                    <div>
                   {img && <Link href={link}>
                       <a>
                           <SectionFigure>
                           <SectionImg
                            src={img}
                            alt={title}
                            isReverse={isReverse}
                        />
                           <AbsoluteContent>
                                <AbsoluteText src={logo} />
                           </AbsoluteContent>
                       </SectionFigure>
                    </a>
                   </Link>}
                    </div>
                    <SectionBody
                        onMouseLeave={() => setShowServices(false)}
                        isReverse={isReverse}
                    >
                        {title && <SectionTitle>
                            {title}
                        </SectionTitle>}
                        <SectionDescription>
                            {description}
                        </SectionDescription>
                        <SectionFooter >
                            {link
                                && <Link
                                        href={link}
                                    >
                                    <a onMouseEnter={() => setShowServices(true)}>
                                        <Button
                                            variant="secondary"
                                            name="Dowiedz się więcej"
                                            onClick={() => {}}
                                            onMouseEnter={() => setShowServices(true)}
                                        />
                                    </a>
                            </Link>}
                            {showServices && categories
                            && <SectionLinks>
                                {categories.map(category => {
                                    return (
                                       <Link
                                           href={category.url}
                                       >
                                           <a>
                                           <li>
                                            {category.name}
                                           </li>
                                       </a>
                                       </Link>
                                    )
                                })}
                            </SectionLinks>}
                        </SectionFooter>
                    </SectionBody>
                        {children}
                </SectionContent>
            </Container>
        </SectionWrapper>
    )
})

export default Section;