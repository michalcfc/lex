import {DetailedHTMLProps, SelectHTMLAttributes} from "react";

interface Options {
    id: number
    label: string
    value: string
}

export interface SelectProps {
    placeholder?: string
    defaultValue?: string
    value?: string
    defaultOptions?: Options[]
    numberOptionsValue?: Options[]
    label?: string
    onChange: (event: React.FormEvent<HTMLSelectElement>) => void
    onBlur?: (event: React.FormEvent<HTMLSelectElement>) => void
    onFocus?: (event: React.FormEvent<HTMLSelectElement>) => void
    onSubmit?: (event: React.FormEvent<HTMLSelectElement>) => void
    onKeyDown?: (event: React.FormEvent<HTMLSelectElement>) => void
    onKeyPress?: (event: React.FormEvent<HTMLSelectElement>) => void
    onKeyUp?: (event: React.FormEvent<HTMLSelectElement>) => void
}