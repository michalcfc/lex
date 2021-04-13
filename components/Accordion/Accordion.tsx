import { useState } from "react"

import {
    AccordionContainer
} from "./Accordion.styles"

import AccordionItem from "./AccordionItem"

import { AccordionProps } from './Accordion.d';

const Accordion: React.FC<AccordionProps> = ({
    questions
}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const renderedQuestionsAnswers = questions.map((item, index) => {
        const showDescription = index === activeIndex;
        const ariaExpanded = index === activeIndex;
        return (
            <AccordionItem
                showDescription={showDescription}
                ariaExpanded={ariaExpanded}
                item={item}
                index={index}
                onClick={() => {
                    setActiveIndex(index);
                }}
            />
        );
    });

    return (
        <AccordionContainer>
            {renderedQuestionsAnswers}
        </AccordionContainer>
    )
}

export default Accordion