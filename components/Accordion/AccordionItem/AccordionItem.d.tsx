interface Question {
    answer: string
    question: string
}

export interface AccordionItemProps {
    item: { answer: string, question: string}
    index: number
    ariaExpanded: boolean
    showDescription: boolean
    onClick: () => void
}