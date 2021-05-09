import styled from "styled-components";
import { space } from "styled-system"
import Link from 'next/link'

type DataProps = {
  rows?: number
  rowGap?: number
  imgFlex?: boolean
  active?: boolean
  columns?: string
  gridGap?: string
  flexContent?: boolean
  columnGap?: number
  columnSpan?: number
  hoverEffect?: boolean
  pointer?: boolean
  p?: number
  mt?: number
  mb?: number
  m?: number
}

export const CardContainer = styled.div<DataProps>`
  ${space};
  display: flex;
  cursor: ${({hoverEffect}) => hoverEffect && `pointer`};
  position: relative;
  border-radius: 0.4rem;
  flex-direction: ${({imgFlex}) => !imgFlex && `column`};
  border: ${({theme, active }) => active ? `1px solid ${theme.colors.lightGreen}` :  '1px solid transparent'} ;
  color: ${({theme}) => theme.colors.black};
  background: ${({theme}) => theme.background};
  box-shadow: ${({theme,}) => theme.boxShadow};
  grid-column: ${({columnSpan}) => columnSpan ? `1 / span ${columnSpan}` : ''};
  &:hover {
    border: ${({theme, hoverEffect}) => hoverEffect && `1px solid ${theme.colors.lightGreen}`};
    box-shadow: ${({theme, hoverEffect}) => hoverEffect && theme.boxShadowColor};
  };
`;

export const CardFigure = styled.figure`
  margin: 0;
  padding: 0;
  position: relative;
`

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardIcon = styled.figure`
  margin: 0;
  padding-bottom: 1rem;
  position: relative;
  display: flex;
  font-size: 1.2rem;
  color: ${({theme}) => theme.colors.brand};
`

export const CardHeader = styled.figure`
  display: flex
`

export const CardTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const CardContent = styled.div<DataProps>`
  flex: 1 1 0%;
  padding:  ${({theme}) => theme.spacing.sm};
  display: ${({flexContent}) => flexContent && `flex`};
  align-items: ${({flexContent}) => flexContent && `center`};
  margin:  ${({theme}) => theme.spacing.sm};
  & svg {
     margin-right: ${({flexContent}) => flexContent && `1rem`};
  }
`;

export const CardDescription = styled.p`
`

export const CardFooter = styled.div`
  margin: ${({theme}) => theme.spacing.sm};
  padding: ${({theme}) => theme.spacing.sm};
`;

export const CardLink = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  position: relative;
  justify-content: flex-end;
  color: ${({theme}) => theme.colors.brand};
  & a {
    font-size: 1.2rem;
    margin-right: 1rem;
  }
`