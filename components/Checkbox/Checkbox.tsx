import React from "react"
import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxWrapper 
} from "./Checkbox.styles"
import {CheckboxProps } from "./Checkbox.d"

const Checkbox: React.FC<CheckboxProps> = ({id, label}) => (

  <CheckboxWrapper>
    <CheckboxInput id={id} />
    <CheckboxLabel htmlFor={id}>
        {label}
    </CheckboxLabel>
  </CheckboxWrapper>
)

export default Checkbox;
