
import styled, {
    keyframes
} from "styled-components";
import { lighten } from "polished";

type DataProps = {
    value?: string
}

const progress = (value) => keyframes`
  0% { 
    width: 0; 
  }
  100% {
    width: ${value}%;
  }
`;

export const PricingWrapper = styled.div<DataProps>`

`;

export const StyledLink = styled.a`
  cursor: pointer;
  border-radius: .4rem;
  margin: ${({theme}) => theme.spacing.md};
  padding: ${({theme}) => theme.spacing.md};
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.brand};
  &:hover {
    background: ${({ theme }) => lighten(0.1, theme.colors.brand)};
  }
`

export const PricingPack = styled.div<DataProps>`
    padding: 1.4rem 0;
    text-align: center;
    border: 1px solid transparent;
    border-radius:  ${({theme}) => theme.borderRadius};
    box-shadow:  ${({theme}) => theme.boxShadow};
    background: ${({theme}) => theme.colors.white};
      position: relative;
  &:hover {
    border: ${({theme}) => `1px solid ${theme.colors.lightGreen}`};
    box-shadow: ${({theme}) => theme.boxShadowColor};
  };
`;

export const PricingSwitchWrapper = styled.div<DataProps>`
  position: relative;
  margin: 0 auto;
  border-radius: 1.42rem;
  @media (min-width: 800px) {
    width: 50%;
  }
  `
  
  export const PricingSwitch = styled.div<DataProps>`
  position: relative;
  background: ${({theme}) => theme.colors.white};
  box-shadow: 0 2px 24px 0 rgba(0,0,0,.14);
`

export const PricingSwitchTitle = styled.div<DataProps>`
  margin: 1rem 0;
 font-size: 1.2rem;
`

export const PricingSwitchSelect = styled.div<DataProps>`
  height: 3rem;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
`

export const PricingSwitchLabel = styled.label<DataProps>`
  position: relative;
  display: flex;
  align-items: center;
  ${PricingSwitchSelect} {
    width: 100%;
    cursor: pointer;
    &:before {
      left: 50%;
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      content:  attr(data-checked);
    }
    &:after {
      left: 0;
      width: 50%;
      height: 100%;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      content:  attr(data-unchecked);
      background: ${({theme}) => theme.colors.brand};
      position: absolute;
    }
  }
  `
export const PricingSwitchInput = styled.input<DataProps>`
  display: none;
  &:checked ~ label {
    ${PricingSwitchSelect} {
      
      &:before {
        left: 0;
        display: flex;
        justify-content: center;
        content: attr(data-unchecked);
        align-items: center;
        height: 100%;
      }

      &:after {
        left: 50%;
        height: 100%;
        display: flex;
        content: attr(data-checked);
        justify-content: center;
        align-items: center;
      }
    }
  }
`

export const PricingHeader = styled.div<DataProps>`
  margin-bottom: 1rem;
`;

export const PricingTitle = styled.div<DataProps>`
    font-weight: bold;
    font-size: 1.6rem;

`

export const PricingDescription = styled.div<DataProps>`
  margin: 1rem 0;
`

export const PricingItemPrice = styled.div<DataProps>`
  font-size: 1.4rem;
  font-weight: bold;
  padding: .6rem 0;
  color: ${({theme}) => theme.colors.brand};
`;
export const PricingItem = styled.div<DataProps>`
      font-size: 1.2rem;
      padding: 1rem 0;
      margin: ${({theme}) => theme.spacing.sm};
      & svg {
        margin-right: .6rem;
      }
`;

export const ProgressBar = styled.div<DataProps>`
  height: 32px;
  margin: 0 auto;
  width: 210px;
  border-radius: .42rem;
  background: ${({theme}) => theme.colors.lightGray};
`;

export const ProgressValue = styled.div<DataProps>`
  width: ${({value}) => `${value}% `};
  height: 100%;
  border-radius: .42rem;
  background:  linear-gradient(90deg, rgba(23,46,87,1) 0%, rgba(28,57,136,1) 39%, rgba(14,63,185,1) 100%);
  animation: ${progress} 3s ease-in-out;
`;

export const PricingBottom = styled.div<DataProps>`
  margin-top: 2rem;
`


export const PricingFooter = styled.div<DataProps>`
  margin: ${({theme}) => theme.spacing.md};
`

export const ChannelList = styled.div<DataProps>`
  margin-top: 1rem;
  cursor: pointer;
  text-decoration: underline;
  color: ${({theme}) => theme.colors.darkBlue};
`