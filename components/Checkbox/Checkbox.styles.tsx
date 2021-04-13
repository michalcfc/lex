import styled from "styled-components";

type DataProps = {

}

export const CheckboxWrapper =styled.div<DataProps>`
    display: flex;
    margin-bottom: 0.5rem;
    align-items: center;
`;

export const CheckboxInput =styled.input.attrs({ type: 'checkbox' })<DataProps>`
    cursor: pointer;
`;

export const CheckboxLabel =styled.label<DataProps>`
    cursor: pointer;
    margin: 0.2rem 0.5rem;
`;
