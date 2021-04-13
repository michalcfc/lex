import styled from "styled-components";

type DataProps = {
    src?: string
}

export const AvatarWrapperStyle = styled.div<DataProps>`
    width: 3rem;
    height: 3rem;
    margin-right: ${({theme}) => theme.spacing.sm}
`;

export const AvatarImg = styled.img<DataProps>`
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    border-radius: 50%;
`