import styled from "styled-components";

type DataProps = {
}

export const FiltersStyle = styled.div<DataProps>`
    padding: 0.5rem;
    max-height: 100%;
    border-radius: 0.4rem;
    background: ${({theme}) => theme.background};
    box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
`;