import React, { InputHTMLAttributes } from "react"
import {
  InputWrapper,
  InputLabel,
  InputStyle
} from "./Input.styles"
import { InputProps } from "./Input.d"

type Props = InputProps &  InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = ({
  placeholder,
  defaultValue,
  label,
    ...rest
}) => (
  <>
    <InputWrapper>
        <InputStyle
            {...rest}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      <InputLabel> {label} </InputLabel>
    </InputWrapper>
  </>
)

export default Input;