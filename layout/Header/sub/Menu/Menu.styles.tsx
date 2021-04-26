import styled, { StyledComponent } from "styled-components";
import { lighten } from 'polished';

type DataProps = {
}


export const MenuWrapper = styled.div<DataProps>`
  display: flex;
  align-items: center;
`;

export const MenuItem: any = styled.div`
  cursor: pointer;
  height: 100%;
  padding:  1rem 1rem 0;
  position: relative;
  &:last-child {
    padding-right: 0;
  }
  & a {
    color: inherit;
    font-size: 1.2rem;
    text-decoration: none;
  }
  &:hover {
    color: ${({ theme }) => lighten(0.1, theme.colors.gray)};
    transition: all 1s ease;
    &:before {
        background: white;
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
    height: 3px;
    bottom: -4px;
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