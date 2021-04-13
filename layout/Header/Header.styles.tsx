import styled from "styled-components";
import { lighten } from 'polished';

type DataProps = {
  position?: boolean
  homePage?: boolean
}

export const BrandLogo = styled.div<DataProps>`
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`

export const SocialIcon = styled.div<DataProps>`
  margin-right: .72rem;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => lighten(0.1, theme.colors.brand)};
  }
`

export const HeaderWrapper = styled.header<DataProps>`
    top: 0;
    width: 100%;
    height: auto;
    z-index: 99;
    grid-area: header;
    position: ${({homePage}) => homePage ? "fixed" :  ""};;
    transition: all 0.5s;
    position:  ${({theme, position}) => position ? "fixed" :  ""};
    background: ${({theme, position}) => position ? theme.colors.white : 'transparent'};
    color: ${({theme, position}) => position ? "#17175e" : theme.colors.black};
    box-shadow:  ${({homePage, position}) => (position || !homePage) && "0 8px 20px 0 rgba(0, 0, 0, 0.1)"};
`;

export const HeaderTopInfoWrapper = styled.div<DataProps>`
  width: 100%;
  padding: .42rem 0;
  background: ${({theme}) => theme.colors.brand};
  display: flex;
  color: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: center;
  display: ${({position}) => position ? 'none' : ""};
  & svg {
    margin-right: .42rem;
  }
  @media (max-width: 800px) {
    display: none;
  }
`

export const HeaderTopInfoContent = styled.div<DataProps>`
  width: 80%;
  padding: .42rem 0;
  justify-content: space-between;
  display: ${({position}) => position ? 'none' : "flex"};
`

export const HeaderTopInfoItems = styled.div<DataProps>`
  display: flex;
`

export const HeaderTopInfoItem = styled.div<DataProps>`
  margin: 0 1rem;
  &:first-child {
   margin: 0;
  }
`

export const HeaderContentWrapper = styled.div<DataProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 padding: ${({position}) => position ? '.42rem' : ".6rem 0"};
`

export const HeaderContent = styled.div<DataProps>`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`