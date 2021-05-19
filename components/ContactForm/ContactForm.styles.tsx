import styled from "styled-components";
import { lighten } from 'polished';

type DataProps = {
}

export const ContactWrapper = styled.div<DataProps>`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    align-item: center;
    flex-direction: row;
  }
`;

export const ContactLeft = styled.div<DataProps>`
@media (min-width: 800px) {
  flex: 0 0 50%
}
@media (max-width: 800px) {
    order: 1;
  }
`
  
  export const ContactFormContent = styled.div<DataProps>`
  @media (min-width: 800px) {
    flex: 0 0 50%
  }
`;

export const ContactItem = styled.div<DataProps>`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const ContactItemText = styled.div<DataProps>`
  line-height: 1.4;
  font-size: 1.2rem;
`;

export const ContactIcon = styled.div<DataProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.white};
  margin: 0 ${({theme}) => theme.spacing.md} 0 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({theme}) => lighten(0.1, theme.colors.brand)};
  padding: ${({theme}) => theme.spacing.sm};
`;
