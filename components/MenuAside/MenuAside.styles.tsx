import styled, { keyframes } from "styled-components";
import { lighten } from "polished";
// import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
    fontBold?: boolean
}

export const MenuAsideWrapper = styled.div<DataProps>`
  font-size: .875rem;
  background: ${({theme}) => theme.colors.white};
  padding: ${({theme}) => theme.spacing.md};
`

export const MenuAsideContent = styled.div<DataProps>`
  margin: 0 2rem;
`

export const MenuItem = styled.div<DataProps>`
  padding: ${({theme}) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => lighten(0.5, theme.colors.gray)};
  &:hover {
    color:  ${({theme}) => theme.colors.brand};
  }
`

export const CurrentPage = styled.div<DataProps>`
    cursor: pointer;
    font-weight: ${({fontBold}) => fontBold && 'bold' };
`;

