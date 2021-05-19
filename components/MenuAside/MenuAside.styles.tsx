import styled, { keyframes } from "styled-components";
// import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
    fontBold?: boolean
}

export const MenuAsideWrapper = styled.div<DataProps>`
  flex: 0 0 40%;
`

export const CurrentPage = styled.div<DataProps>`
    cursor: pointer;
    font-weight: ${({fontBold}) => fontBold && 'bold' };
`;

