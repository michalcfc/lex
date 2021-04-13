export interface InputProps {
    placeholder?: string
    defaultValue?: string
    value: string,
    label: string;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void
    onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
    onFocus?: (event: React.FormEvent<HTMLInputElement>) => void
    onSubmit?: (event: React.FormEvent<HTMLInputElement>) => void
    onKeyDown?: (event: React.FormEvent<HTMLInputElement>) => void
    onKeyPress?: (event: React.FormEvent<HTMLInputElement>) => void
    onKeyUp?: (event: React.FormEvent<HTMLInputElement>) => void
  }