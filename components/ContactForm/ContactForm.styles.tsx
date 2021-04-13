import styled from "styled-components";

type DataProps = {
}

export const ContactFormStyle = styled.div<DataProps>`
  background: ${({theme}) => theme.background};
`;

export const ContactFormContent = styled.div<DataProps>`
  margin: 0 auto;
`;