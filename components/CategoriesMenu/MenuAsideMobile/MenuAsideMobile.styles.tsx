import styled, { keyframes } from "styled-components";
import { lighten } from "polished";
// import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
    fontBold?: boolean
}

export const MenuAsideMobileWrapper = styled.div<DataProps>`
  font-size: 2.5rem;
  position: relative;
  background: ${({theme}) => theme.colors.white};
`

export const MenuAsideMobileContent = styled.div<DataProps>`
  margin: 0 2rem;
  position: absolute;
  z-index: 99;
  top: 0;
  transform: translate(-10%, 32%);
  padding: ${({theme}) => theme.spacing.sm} ${({theme}) => theme.spacing.md};
  box-shadow: ${({theme}) => theme.boxShadow};
  background: ${({theme}) => theme.colors.white};
`

export const MenuAsideMobileButtonWrapper = styled.div<DataProps>`
  max-width: 6rem;
  display: flex;
  justify-content: space-around;
  box-shadow: ${({theme}) => theme.boxShadow};
`

export const MenuAsideMobileButtonContent = styled.div<DataProps>`
  padding: ${({theme}) => theme.spacing.sm};
`

export const MenuItem = styled.div<DataProps>`
  padding: ${({theme}) => theme.spacing.sm} 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => lighten(0.5, theme.colors.gray)};
  }
  &:hover {
    color:  ${({theme}) => theme.colors.brand};
  }
`

export const CurrentPage = styled.div<DataProps>`
    cursor: pointer;
    font-weight: ${({fontBold}) => fontBold && 'bold' };
`;

