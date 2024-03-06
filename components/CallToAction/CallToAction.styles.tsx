import styled from 'styled-components';
import { mapToTheme as theme } from 'styled-map';

type DataProps = {};

export const CallToActionStyle = styled.div<DataProps>`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 24px rgb(0 0 0 / 14%);
  @media (min-width: 800px) {
    display: flex;
  }
`;

export const CallToActionRight = styled.div<DataProps>`
  line-height: 1.6;
  @media (min-width: 800px) {
    margin-left: 4rem;
  }
`;

export const CallToActionLeft = styled.div<DataProps>`
  @media (min-width: 800px) {
    margin: -176px 0;
    margin-left: 2rem;
  }
`;

export const CallToActionImg = styled.img<DataProps>`
  max-width: 100%;
`;

export const CallToActionTitle = styled.h3<DataProps>``;

export const CallToActionText = styled.div<DataProps>`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const PhoneNumber = styled.p<DataProps>`
  margin-right: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
