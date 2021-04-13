import React from "react"
import { AvatarProps } from "./Avatar.d"
import { 
  AvatarWrapperStyle,
  AvatarImg
} from "./Avatar.styles"

const Avatar: React.FC<AvatarProps> = ({
  img
}) => (
  <>
    <AvatarWrapperStyle>
      <AvatarImg src={img} />
    </AvatarWrapperStyle>
  </>
)

export default Avatar;
