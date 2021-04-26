import { space } from 'styled-system'
import styled from "styled-components"

type DataProps = {

}

export const GoToTopWrapper = styled.div<DataProps>`
    cursor: pointer;
    position: fixed;
    z-index: 1000;
    bottom: 40px;
    right: 30px;
`

export const GoToTopContent = styled.div<DataProps>`
    color: #fff;
    font-size: 25px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    background: ${({theme}) => theme.colors.brand};
`