import styled, { StyledComponent } from "styled-components";
import { lighten } from 'polished';

type DataProps = {
}


export const MenuWrapper = styled.div<DataProps>`
  top: 106%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: absolute;
  transform: translateX(-40%);
  border-radius:  ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow:  ${({ theme }) => theme.boxShadow};
`;

export const MenuItem: any = styled.div`
    cursor: pointer;
    padding: 1rem;
    white-space:nowrap;
    position: relative;
  & a {
    color: inherit;
    z-index: 1;
    text-decoration: none;
  }
  &:hover {
    color: ${({ theme }) => lighten(0.2, theme.colors.black)};
    transition: all 1s ease;
    -webkit-transition: all 1s ease;
    &:before {
        background: rgb(13, 26, 38);
        width: 100%;
        transition: width 0.5s cubic-bezier((0.22, 0.61, 0.36, 1));
    }
    &:after {
      background: transparent;
      width: 100%;
    }
  };
  &:before, &:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 1px;
    bottom: 16%;
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
`;

export const MenuLink = styled.div`
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
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