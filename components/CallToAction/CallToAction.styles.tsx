import styled from "styled-components";
import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
}

export const CallToActionStyle = styled.div<DataProps>`
    display: flex;
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 2px 24px rgb(0 0 0 / 14%);
`;

export const CallToActionRight= styled.div<DataProps>`
  margin-left: 2rem;
  line-height: 1.6;
`;

export const CallToActionLeft = styled.div<DataProps>`
    margin: -180px 0;
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
`;

export const PhoneNumber = styled.p<DataProps>`
    margin-right: ${({ theme }) => theme.spacing.lg} ;
    font-size: ${({ theme }) => theme.fontSize.xl};
`


