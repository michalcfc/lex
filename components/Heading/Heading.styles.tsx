
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type DataProps = {
    top?: string
}

type HeadingProps = SpaceProps & DataProps;

export const HeadingWrapper = styled.div<HeadingProps>`
  ${space};
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;


