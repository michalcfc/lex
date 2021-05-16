import styled, { keyframes }  from "styled-components";

type DataProps = {
}

const bouncingLoader = keyframes`
  100% {
    transform: translateX(-200%);
  }
`

export const SliderWrapper = styled.div<DataProps>`
  overflow-x: hidden;
  position: relative;
  //&:before,
  //&:after {
  //  width: 70px;
  //  height: 80px;
  //  content: '';
  //  top: 0;
  //  background-size: 100%;
  //  position: absolute;
  //  z-index: 1;
  //}
  //&:before {
  //  left: 0;
  //  background: linear-gradient(270deg,rgba(255,255,255,0) 0,#edf2f7d1 100%);
  //}
  //&:after {
  //  right: 0;
  //  background: linear-gradient(90deg,rgba(255,255,255,0) 0,#edf2f7d1 100%);
  //}
`

export const SliderStyle = styled.div<DataProps>`
  display: flex;
  align-items: center;
  width: 100px;

`;

export const SliderItem = styled.div<DataProps>`
  margin: 0 1rem;
  opacity: 0.25;
  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.3s;
  }
`;

export const SliderImg = styled.img<DataProps>`
  animation: ${bouncingLoader} 10s linear infinite ;
  height: 120px;
`