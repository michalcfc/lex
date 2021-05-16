import { lighten } from "polished";
import styled from "styled-components";
import styledMap, { mapToTheme as theme } from 'styled-map';

type DataProps = {
  children?: string
  variant?: string
  buttonBackground?: string
  danger?: string
  hero?: boolean
}

const buttonColor = styledMap`
  default: ${({ theme }) => theme.colors.white};
  secondary: ${({ theme }) => theme.colors.dark};
  danger:  ${({ theme }) => theme.colors.white};
`;

const buttonBackground = styledMap`
  default: ${({ theme }) => theme.colors.darkBlue};
  secondary: ${({ theme }) => theme.colors.lightgray};
  danger:  ${({ theme }) => theme.colors.red};
`;

const buttonHover = styledMap`
  default: ${({ theme }) => lighten(0.1, theme.colors.darkBlue)};
  secondary: ${({ theme }) => lighten(0.1, theme.colors.lightGray)};
  danger:  ${({ theme }) => lighten(0.1, theme.colors.red)};
`;

const buttonSize = styledMap`
  default: .75rem 1.2rem;
  secondary: .47rem .75rem;
  hero:  1rem 1.75rem;
  cookie: .4rem 1.75rem;
`;

const fontSize = styledMap`
  hero: .9rem;
  default: 1.4rem
`

const buttonShadow = styledMap`
  default: '';
`



export const ButtonWrapper = styled.button<DataProps>`
  cursor: pointer;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  margin: ${({theme}) => theme.spacing.xs} ${({theme}) => theme.spacing.xs} 0 0;
  border-radius: ${({theme}) => theme.borderRadius};
  border: 0;
  color: ${buttonColor};
  padding: ${theme('buttonSize', 'variant')};
  box-shadow: ${buttonShadow};
  background: ${buttonBackground};
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    background: ${buttonHover};
  }
`;