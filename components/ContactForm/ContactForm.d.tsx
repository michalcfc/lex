interface Options {
    id: number
    label: string
    value: string
}

export interface ContactFormProps {
    messageTopic: Options[]
    choosenPack?: string
    isContactPage?: boolean
}