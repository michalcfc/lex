import React, {SelectHTMLAttributes, TextareaHTMLAttributes} from "react"
import {
    SelectStyle,
    SelectLabel,
    SelectWrapper,

  } from "./Select.styles"

  import { SelectProps } from "./Select.d"

  import { OPTIONS_NUMBER_VALUE } from "./selectConstants"

type Props = SelectProps &  SelectHTMLAttributes<HTMLSelectElement>

  const Select: React.FC<Props> = ({
    placeholder,
    defaultValue,
    defaultOptions,
    numberOptionsValue,
    label,
    value,
    onChange,
    onBlur,
    onFocus,
    onSubmit,
    onKeyDown,
    onKeyPress,
    onKeyUp,
      ...rest
  }) => {
    const options = (numberOptionsValue
        ? OPTIONS_NUMBER_VALUE 
        : defaultOptions).map(option => {
      return (
          <option
            key={option.value}

            value={option.value}
            hidden={option.hidden ? option.selected : ''}
            selected={option.selected ? option.selected : ''}
            disabled={option.disabled ? option.disabled : ''}
          >
            {option.label}
          </option>)
    })
    return (
        <SelectWrapper>
          <SelectStyle
              {...rest}
              placeholder={placeholder}
              defaultValue={defaultValue ? defaultValue : null}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              onSubmit={onSubmit}
              onKeyDown={onKeyDown}
              onKeyPress={onKeyPress}
              onKeyUp={onKeyUp}
              value={value ? value : defaultValue}
          >
            {options}
          </SelectStyle>
          <SelectLabel>{label}</SelectLabel>
        </SelectWrapper>
    )
  }
  
  export default Select;