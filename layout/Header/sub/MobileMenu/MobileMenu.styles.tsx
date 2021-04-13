import styled, { StyledComponent } from "styled-components";
import Link from 'next/link'

type DataProps = {
}


export const MenuWrapper = styled.div<DataProps>`
    top: 0;
    right: 0;
    bottom: 0;
    width: 20rem;
    z-index: 9999;
    position: fixed;
    overflow-y: auto;
    background: ${({theme}) => theme.colors.white};
`;

export const ManuContent = styled.div<DataProps>`
    width: 100%;
    padding: 1.25rem;
`;

export const MenuHeader = styled.div<DataProps>`
    width: 100%;
    padding: 1.25rem;
    text-align: right;
`;

export const MenuItem = styled.li<DataProps>`
    padding: .8rem 0;
    display: block;
    width: 100%;
    font-size: 1.4rem;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const LinkStyled = styled.a<DataProps>`
  font-size: 1.4rem;
`;

export const CloseBtn = styled.span<DataProps>`
    cursor: pointer;
    font-size: 1.4rem;
`;

export const Overlay = styled.div<DataProps>`
    width: 100%;
    height: 100%;
    z-index: 9997;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.4);
    overflow: hidden;
`