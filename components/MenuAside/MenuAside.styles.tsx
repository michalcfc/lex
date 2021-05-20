import styled, { keyframes } from "styled-components";
// import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
    fontBold?: boolean
}

export const MenuAsideWrapper = styled.div<DataProps>`
  font-size: .875rem;
  border-left: 1px solid #efefef;
`

export const MenuAsideContent = styled.div<DataProps>`
  margin: 0 2rem;
`

export const CurrentPage = styled.div<DataProps>`
    cursor: pointer;
    font-weight: ${({fontBold}) => fontBold && 'bold' };
`;

