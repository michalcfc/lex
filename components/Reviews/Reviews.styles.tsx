import styled from "styled-components";
import { space } from "styled-system"

type DataProps = {

}

export const ReviewsWrapper = styled.div<DataProps>`
  display: flex;
`;

export const ReviewContent =  styled.div<DataProps>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({theme}) => theme.spacing.md};
  color: ${({theme}) => theme.colors.black};
  background: ${({theme}) => theme.colors.white};
  box-shadow: ${({theme}) => theme.boxShadow};
`

export const ReviewText = styled.div<DataProps>`
  font-size: 1.2rem;
`

export const ReviewAuthor = styled.div<DataProps>`
    display: flex;
    align-items: center;
`

export const ReviewAuthorPhoto = styled.img<DataProps>`
`

export const ReviewAuthorName = styled.div<DataProps>`
    font-size: 1.2rem;
    font-weight: bold;
`

export const ReviewStarts = styled.div<DataProps>`
`

export const ReviewBottom = styled.div<DataProps>`
    margin-top: 2rem;

`