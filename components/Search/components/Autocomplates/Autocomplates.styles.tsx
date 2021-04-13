import styled from "styled-components";

type DataProps = {
    test?: boolean
    tabIndex?: any
}

export const AutocomplatesStyle = styled.div<DataProps>`
 
`;

export const AutocomplatesList = styled.div<DataProps>`
    position: absolute;
    background: #fff;
    top: 3.2rem;
    border: 1px solid #eee;
    box-shadow: 0px 20px 20px 1px rgb(0 0 0 / 15%)
`;

export const AutocomplatesItem = styled.div<DataProps>`
    cursor: pointer;
    padding: 0.5rem 0.5rem;
    color: ${props => props.test && "#fff"};
    background: ${props => props.test ? "#845ef7" : "white"};
    &:hover {
        color: #fff;
        background: #845ef7;
    }
`;

export const AutocomplatesText = styled.div<DataProps>`
    padding: 0.5rem 0.5rem;
`;