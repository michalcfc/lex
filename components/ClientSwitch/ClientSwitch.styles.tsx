import styled from "styled-components";
import Link from "next/link"
import { mapToTheme as theme } from 'styled-map'

type DataProps = {
  variant?: string
}

export const ClientSwitchWrapper = styled.div<DataProps>`
  // display: grid;
  // gap: 2rem;
  // place-items: center;
`;

export const LeftSide = styled.div<DataProps>`
  @media (min-width: 800px) {
    flex-basis: 50%;
  }
`

export const SwitchButtons = styled.div<DataProps>`
  width: 100%;
  @media (min-width: 800px) {
    width: auto;
  }
`

export const StyledLink = styled.div<DataProps>`
  display: block;
  cursor: pointer;
  text-align: center;
  border-radius: .42rem;
  padding: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.md} 0;
  border: 1px solid ${({ theme }) => theme.colors.brand};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.brand};
  }
  @media (min-width: 800px) {
    width: 310px;
  }
`



