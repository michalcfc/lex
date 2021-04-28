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
  display: flex;
  align-items: center;
  position: relative;
  transition: opacity 0.4s ease-in-out;
  &:not(last-child) {
    margin-left: 2.4rem;
  }
  & svg {
    margin-left: .4rem;
  }
  & a {
    color: inherit;
    text-decoration: none;
  }
  &:hover {

    &:before {
        background: white;
        width: 100%;
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
    height: 2px;
    bottom: -8px;
    background: rgb(13, 26, 38);
    left: 0;
    transition: 0.5s;
  };
  &:before {
    left: 0;
    transition: 0.5s  ease-in-out;
  }
  &:after {
    background: rgb(13, 26, 38);
    right: 0;
    transition: width 0.5s ease-in-out;
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