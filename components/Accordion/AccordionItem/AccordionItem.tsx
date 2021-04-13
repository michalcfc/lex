
import {
    AccordionItemContainer,
    AccordionItemContent,
    AccordionItemDescription,
    AccordionArrow
} from "./AccordionItem.styles"

import Arrow from "./../../Arrow"

import { AccordionItemProps } from "./AccordionItem.d";

const AccordionItem: React.FC<AccordionItemProps> = ({
       showDescription,
       ariaExpanded,
       item,
       index,
       onClick,
   }) => (
    <AccordionItemContainer key={item.question}>
            <AccordionItemContent
                aria-expanded={ariaExpanded}
                aria-controls={`faq${index}_desc`}
                onClick={onClick}
            >
                {item.question}
             <AccordionArrow>
                 {showDescription
                     ? <Arrow upDirection
                              right="2rem"
                        />
                     : <Arrow downDirection
                              right="2rem"
                        />
                 }
             </AccordionArrow>
            </AccordionItemContent>
            {showDescription
            && <AccordionItemDescription
                id={`faq${index}_desc`}
                data-qa="faq__desc"
            >
                {item.answer}
            </AccordionItemDescription>}
    </AccordionItemContainer>
);

export default AccordionItem;