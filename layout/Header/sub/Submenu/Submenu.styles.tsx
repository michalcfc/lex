import styled, { StyledComponent } from "styled-components";
import { lighten } from 'polished';

type DataProps = {
}


export const MenuWrapper = styled.div<DataProps>`
  top: 140%;
  position: absolute;
  z-index: 999;
  transition: .5s;
  transform: translateX(-40%);
  border-radius:  ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow:  ${({ theme }) => theme.boxShadow};
`;

export const MenuColumns = styled.ul<DataProps>`
  margin: 0;
  list-style: none;
`

export const MenuContent = styled.div<DataProps>`
  padding: 1rem;
`

export const MenuItem: any = styled.li`
  cursor: pointer;
  white-space:nowrap;
  position: relative;
  width: fit-content;
  & a {
    overflow: hidden;
    display: inline-block;
    font-size: 1.2rem;
    white-space: nowrap;
    &:hover {
      color: ${({ theme }) => lighten(0.2, theme.colors.black)};
      transition: all 1s ease;
      &:before {
        background: rgb(13, 26, 38);
        width: 100%;
        transition: width 0.5s cubic-bezier((0.22, 0.61, 0.36, 1));
      }
      &:after {
        background: transparent;
      }
    };
    &:before, &:after {
      content: '';
      position: absolute;
      width: 0%;
      height: 1px;
      bottom: 20%;
      background: rgb(13, 26, 38);
      left: 0;
      transition: 0.5s;
    };
    &:before {
      left: 0;
      transition: 0.5s;
    }
    &:after {
      background: rgb(13, 26, 38);
      right: 0;
    }
  }
`;

export const MenuLink = styled.span`
  color: ${({ theme }) => theme.colors.black};
  & svg {
    font-size: 1.4rem;
    color: ${({theme}) => theme.colors.brand};
  }
`

export const Icon = styled(MenuItem)`
  position: relative;
  &:before {
    content: "1";
    color: #fff;
    top: -4px;
    left: -6px;
    line-height: 16px;
    width: 16px;
    height: 16px;
    font-size: 10px;
    font-weight: bold;
    background: #ff324d;;
    position: absolute;
    border-radius: 50%;
    text-align: center;
  }`


MenuItem.Icon = Icon