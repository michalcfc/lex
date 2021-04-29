import styled from "styled-components";
import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
}

export const CookieWrapper = styled.div<DataProps>`
position: fixed;
bottom: 0;
width: 90%;
left: 50%;
transform: translate(-50%, -20%);
padding: 0 ${({theme}) => theme.spacing.md};
color: ${({theme}) => theme.colors.white};
background: ${({theme}) => theme.colors.brand};
border-radius: ${({theme}) => theme.borderRadius};
@media (min-width: 800px) {
    width: 60%;
  }
`;

export const CookieContent = styled.div<DataProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({theme}) => theme.spacing.sm} 0;
`;
