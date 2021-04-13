export interface TextareaProps {
    placeholder?: string
    defaultValue?: string
    value: string,
    rows?: string,
    label: string,
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur?: (event: React.FormEvent<HTMLTextAreaElement>) => void
    onFocus?: (event: React.FormEvent<HTMLTextAreaElement>) => void
    onSubmit?: (event: React.FormEvent<HTMLTextAreaElement>) => void
    onKeyDown?: (event: React.FormEvent<HTMLTextAreaElement>) => void
    onKeyPress?: (event: React.FormEvent<HTMLTextAreaElement>) => void
    onKeyUp?: (event: React.FormEvent<HTMLTextAreaElement>) => void
}