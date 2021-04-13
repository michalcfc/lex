import React, { TextareaHTMLAttributes } from "react"
import {
    TextareaStyle,
    TextareaLabel,
    TextareaWrapper
} from "./Textarea.styles"
import { TextareaProps } from "./Textarea.d"
import {InputStyle} from "@components/Input/Input.styles";

type Props = TextareaProps &  TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea: React.FC<Props> = ({
         placeholder,
         defaultValue,
         value,
         onChange,
         onBlur,
         onFocus,
         onSubmit,
         onKeyDown,
         onKeyPress,
         onKeyUp,
        label,
        rows,
        ...rest
     }) => (
    <>
        <TextareaWrapper>
            <TextareaStyle
                {...rest}
                rows={4}
                placeholder={placeholder}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                onSubmit={onSubmit}
                onKeyDown={onKeyDown}
                onKeyPress={onKeyPress}
                onKeyUp={onKeyUp}
            />
            <TextareaLabel> {label} </TextareaLabel>
        </TextareaWrapper>
    </>
)

export default Textarea;