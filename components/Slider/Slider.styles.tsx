import styled, { keyframes }  from "styled-components";

type DataProps = {
}

const loopOne = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
`

export const SliderWrapper = styled.div<DataProps>`
  height: 100px;
  margin: auto;
  margin: 2rem 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  &:before,
  &:after {
    background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  &:before {
    left: 0;
    top: 0;
  }
  &:after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
`

export const SliderStyle = styled.div<DataProps>`
  display: flex;
  align-items: center;
  width: calc(250px * 14);
  width: 100px;
`;

export const SliderItem = styled.div<DataProps>`
  opacity: 0.25;
  width: 250px;
  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.3s;
  }
`;

export const SliderImg = styled.img<DataProps>`
  height: 120px;
  animation: ${loopOne} 30s linear infinite;
`