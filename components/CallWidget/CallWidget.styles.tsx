import styled, {keyframes} from "styled-components";
import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
  onClick?: () => void
}

const shake = keyframes`
  0% { transform: rotate(0deg); }
  80% { transform: rotate(0deg); }
  85% { transform: rotate(10deg); }
  95% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
`;

export const CallWidgetWrapper = styled.div<DataProps>`
  right: 30px;
  bottom: 16%;
  position: fixed;
  z-index: 99;
  display: flex;
  justify-content: flex-end;
  @media (min-width: 800px) {
      bottom: 12%;
      right: 30px;
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
  box-shadow: 0px 6px 26px 0px rgb(55 99 236 / 40%);
  & svg {
    animation: ${shake} 2.5s infinite;
  }
`;

export const CallWidgetMessage = styled.div<DataProps>`
  margin-right: 1rem;
  position: absolute;
  bottom: 80px;
  width: 22rem;
  padding: ${({theme}) => theme.spacing.md};
  border-radius:  ${({ theme }) => theme.borderRadius};
  background: ${({theme}) => theme.colors.white};
  box-shadow: 0px 6px 26px 0px rgb(55 99 236 / 40%);
`
