import {
    SectionWrapper,
    SectionTitle,
    SectionContent,
    SectionDescription
} from "./Section.styles"
import { SectionProps } from "./Section.d";


const Section: React.FC<SectionProps> = ({
    p,
    m,
    mt,
    mb,
    pt,
    pb,
    title,
    children,
    background,
    customPadding,
    description
}) => {
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
        >
            <SectionContent
                customPadding={customPadding}
            >
            <SectionTitle>
                {title}
            </SectionTitle>
                <SectionDescription>
                    {description}
                </SectionDescription>
                <>{children}</>
            </SectionContent>
        </SectionWrapper>
    )
}

export default Section;