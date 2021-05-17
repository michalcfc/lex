import styled from "styled-components";
import { lighten, darken } from 'polished';


export const FooterWrapper = styled.footer`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-area: footer;
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.brand};
  & a {
    color: ${({theme}) => theme.colors.white};
    text-decoration: none;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FooterBottom = styled.div`
  padding: 1rem;
`;

export const FooterColumn = styled.div`
margin-bottom: 2rem;
@media (min-width: 800px) {
  margin: 0;
  flex: 0 0 25%;
  max-width: 25%;
  &:not(:first-child) {
    padding: 0 ${({theme}) => theme.spacing.md};
  }
}
`;

export const FooterLogo = styled.img`
  margin-bottom: 0.6rem;
`


export const FooterContactItem = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.4;
  margin-bottom: ${({theme}) => theme.spacing.md};;
`;

export const FooterLinks = styled.div`
  display: flex;
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({theme}) => theme.spacing.md} ;
`;

export const FooterSocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 ${({theme}) => theme.spacing.md} 0 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({theme}) => lighten(0.1, theme.colors.brand)};
  padding: ${({theme}) => theme.spacing.md};
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => lighten(0.2, theme.colors.brand)};
  }
`;

export const FooterLinkItem = styled.li`
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 0.6rem;
  & > a:hover {
    opacity: 1 !important;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.white}
  }
`;

export const FooterLinkList = styled.ul`
    list-style: none;
  `

export const StyledLink = styled.a`
  &:hover {
    opacity: 1 !important;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.white}
  }
`


export const FooterColumnTitle = styled.h6`
  font-size: 1.4rem;
  text-decoration: none;
  margin-bottom: 2rem;
  &:after {
    content: "";
    display: block;
    background: #fff;
    margin-top: 10px;
    width: 60px;
    height: 2px;
  }
`;
