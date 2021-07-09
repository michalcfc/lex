interface Options {
    id: number
    label: string
    value: string
}

interface Data {
    city: string
    street: string
    phone_number_one: string
    phone_number_two: string
}

export interface ContactFormProps {
    messageTopic?: Options[]
    choosenPack?: string
    data?: Data
    isContactPage?: boolean
}