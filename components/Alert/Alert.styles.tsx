import styled from "styled-components";
import { mapToTheme as theme } from 'styled-map'

type DataProps = {
  variant?: string
}

export const AlertWrapper = styled.div<DataProps>`
  color: ${({theme}) => theme.colors.white};
  padding: ${({theme}) => theme.spacing.md};
  margin-bottom: ${({theme}) => theme.spacing.lg};
  border-radius: ${({theme}) => theme.borderRadius};
  background: ${theme('colors', 'variant')};
`;

export const AlertContent = styled.div<DataProps>`

`


