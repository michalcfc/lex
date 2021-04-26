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
    color: ${({theme, position}) => position ? theme.colors.black : theme.colors.white};
    box-shadow:  ${({homePage, position}) => (position || !homePage) && "0 8px 20px 0 rgba(0, 0, 0, 0.1)"};
`;

export const HeaderTopInfoWrapper = styled.div<DataProps>`
  padding: .42rem 0;
  color: ${({theme}) => theme.colors.white};
  display: ${({position}) => position ? 'none' : ""};
  & svg {
    margin-right: .42rem;
  }
  @media (max-width: 800px) {
    display: none;
  }
`

export const HeaderTopInfoContent = styled.div<DataProps>`
  padding: .42rem 0;
  justify-content: space-between;
  display: ${({position}) => position ? 'none' : "flex"};
`

export const HeaderTopInfoItems = styled.div<DataProps>`
  display: flex;
`

export const HeaderTopInfoItem = styled.div<DataProps>`
  padding: 0 1rem;
  &:last-child {
   padding-right: 0;
  }
`

export const HeaderContentWrapper = styled.div<DataProps>`
 padding: ${({position}) => position ? '.42rem' : ".6rem 0"};
`

export const HeaderContent = styled.div<DataProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
`