import styled from "styled-components";


type DataProps = {

}

export const AccordionItemContainer = styled.div<DataProps>`
    width: 100%;
    height: 100%;
    cursor: pointer;
    margin: 1rem 0;
    padding: 1.75rem;
    box-shadow: ${({theme}) => theme.boxShadow};
    background: ${({theme}) => theme.colors.white};
    border-top: 1px solid ${({theme}) => theme.colors.lightGray};
    border-bottom: 1px solid ${({theme}) => theme.colors.lightGray};
`;

export const AccordionItemContent = styled.h3<DataProps>`
    display: flex;
    position: relative;
    justify-content: space-between;
`;

export const AccordionItemDescription = styled.div<DataProps>`
    font-size: 1.2rem;
    margin-top: 1rem;
`;

export const AccordionArrow = styled.div<DataProps>`
`