import styled from "styled-components";
import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
}

export const CallToActionStyle = styled.div<DataProps>`
    display: flex;
`;

export const CallToActionRight= styled.div<DataProps>`
  margin-left: 2rem;
  line-height: 1.6;
  @media (max-width: 800px) {
    font-size: 2.6rem;
  }
`;

export const CallToActionLeft = styled.div<DataProps>`
    margin: -146px 0;
      @media (max-width: 800px) {
        display: none;
      }
`;

export const CallToActionImg = styled.img<DataProps>`
`;

export const CallToActionTitle = styled.h2<DataProps>`
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const CallToActionText = styled.p<DataProps>`
  margin-top: ${({ theme }) => theme.spacing.md};
  @media (min-width: 800px) {
    display: flex;
  }
`;

export const PhoneNumber = styled.p<DataProps>`
    margin-right: ${({ theme }) => theme.spacing.lg} ;
    font-size: ${({ theme }) => theme.fontSize.xxl};
`


