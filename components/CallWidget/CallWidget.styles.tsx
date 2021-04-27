import styled from "styled-components";
import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
  onClick?: () => void
}

export const CallWidgetWrapper = styled.div<DataProps>`
right: 30px;
bottom: 16%;
position: fixed;
@media (min-width: 800px) {
    bottom: 4%;
    right: 100px;
  }

`

export const CallWidgetButton = styled.div<DataProps>`
  height: 60px;
  width: 60px;
  color: #3763ec;
  cursor: pointer;
  font-size: 30px;
  line-height: 60px;
  text-align: center;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 0px 16px 26px 0px rgb(55 99 236 / 40%);
`;
