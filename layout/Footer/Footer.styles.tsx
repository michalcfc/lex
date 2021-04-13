import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-area: footer;
  color: ${({theme}) => theme.colors.white};
  // background: ${({theme}) => theme.colors.brand};
  background: ${({theme}) => theme.colors.brand} url("/img/footer-1.png") right top no-repeat;
`;

export const FooterContent = styled.footer`
  width: 80%;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FooterBottom = styled.footer`
  padding: 1rem;
`;

export const FooterContact = styled.footer`

`;

export const FooterContactItem = styled.footer`
  padding: .45rem;
`;

export const FooterLinks = styled.footer`
  display: flex;
`;

export const LinkItem = styled.footer`
  padding: 1rem;
`;


export const FooterIcon = styled.footer`
  cursor: pointer;
  margin-left: 1rem;
`;