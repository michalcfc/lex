import styled, {
    keyframes
} from "styled-components";


type DataProps = {
    scroll?: number
}

export const ProgressWrapper = styled.div<DataProps>`
    position:  fixed;
    background:  linear-gradient(
    to right,
    ${({ theme }) => theme.colors.brand}, ${({scroll}) => `${scroll}%`},
    transparent  0);
    width:  100%;
    height:  4px;
    z-index:  3;
`;
