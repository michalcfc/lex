import styled from "styled-components";
import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
}

export const CookieWrapper = styled.div<DataProps>`
position: fixed;
left: 50%;
bottom: 0%;
width: 60%;
transform: translate(-50%, -50%);
padding: 0 ${({theme}) => theme.spacing.md};
color: ${({theme}) => theme.colors.white};
background: ${({theme}) => theme.colors.brand};
border-radius: ${({theme}) => theme.borderRadius};
`;

export const CookieContent = styled.div<DataProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({theme}) => theme.spacing.sm} 0;
`;
