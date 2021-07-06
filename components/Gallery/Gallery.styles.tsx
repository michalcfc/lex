import styled from "styled-components"

type DataProps = {

}

export const GalleryWrapper = styled.div<DataProps>`
`

export const GalleryTitle = styled.h2<DataProps>`
`

export const GalleryImage = styled.img<DataProps>`
  width: 20rem;
`
export const GalleryImageZoom = styled.img<DataProps>`
  width: 100%;
`

export const GalleryImgArrow = styled.div<DataProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: ${({theme}) => theme.spacing.sm};
  font-size:  ${({ theme }) => theme.fontSize.xxl};
`


